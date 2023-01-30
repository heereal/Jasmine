import { useCallback, useEffect, useRef, useState } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { useParams } from 'react-router-dom';

import { useRecoilState, useRecoilValue } from 'recoil';
import { dbDefaultState, dbState } from '../../store/selectors';

import * as S from './Map.style';

import InfoWrapper from './InfoWrapper/InfoWrapper';
import Overlay from './Overlay/Overlay';
import { useMap } from '../../hooks';

const { kakao } = window;

// kakao 객체를 window 객체의 interface로 추가
declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  // URL 파라미터 가져오기
  const { bookstoreId } = useParams();

  // 전역 DB 불러오기
  const [DB, setDB] = useRecoilState<IdbState[]>(dbState);
  const defaultDB = useRecoilValue<IdbState[]>(dbDefaultState);

  // 지도가 표시될 HTML element
  const mapContainer = useRef(null);

  const [markerImage, setMarkerImage] = useState<any>(null);

  // 현재 클릭한 bookstroreId를 저장할 state
  const [currentOverlayStoreId, setCurrentOverlayStoreId] = useState<any>(null);

  const { makeMap, makeMarkers, map } = useMap(
    mapContainer,
    setMarkerImage,
    markerImage,
    DB,
  );

  // * 라우터 파라미터로 받은 bookstoreId 값에 따라 지도 이동
  const moveMap = useCallback(
    (bookstoreId: string | undefined) => {
      // 지도가 생성되지 않았으면 함수 종료
      if (!map) return;

      // 이전에 클릭한 마커가 있으면 지도에서 제거
      const prevOverlay = currentOverlayStoreId;
      prevOverlay && prevOverlay.setMap(null);

      // bookstoreId에 해당하는 마커로 지도 이동
      DB.forEach((store) => {
        if (store.ESNTL_ID === bookstoreId) {
          const moveLatLon = new kakao.maps.LatLng(
            store.FCLTY_LA,
            store.FCLTY_LO,
          );
          map.setLevel(6); // 지도 확대 레벨 설정
          map.panTo(moveLatLon); // 지도 중심 좌표 이동

          // 커스텀 오버레이 생성
          const overlayContent = ReactDOMServer.renderToString(
            <Overlay info={store} />,
          );
          const overlay = new kakao.maps.CustomOverlay({
            content: overlayContent,
            map: map,
            position: moveLatLon,
            xAnchor: 0.5,
            yAnchor: 0.5,
          });

          setCurrentOverlayStoreId(overlay);
        }
      });
    },
    [DB, map, currentOverlayStoreId],
  );

  // * 첫 렌더링 시 지도 생성
  useEffect(() => {
    makeMap();
    setDB(defaultDB);
  }, [makeMap, defaultDB, setDB]);

  // * DB가 변경되면 마커 생성
  useEffect(() => {
    makeMarkers();
  }, [DB, makeMarkers, markerImage]);

  // * bookstoreId가 변경되면 지도 이동
  useEffect(() => {
    moveMap(bookstoreId);
    // eslint-disable-next-line
  }, [bookstoreId]);

  return (
    <S.Container>
      <InfoWrapper map={map} />
      <S.MapContainer ref={mapContainer} />
    </S.Container>
  );
}
