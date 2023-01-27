import { useCallback, useEffect, useRef, useState } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { useNavigate, useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { dbState } from '../../store/selectors';

import * as S from './Map.style';

import InfoWrapper from './InfoWrapper/InfoWrapper';
import Overlay from './Overlay/Overlay';

const { kakao } = window;

// kakao 객체를 window 객체의 interface로 추가
declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  const navigate = useNavigate();

  // URL 파라미터 가져오기
  const { bookstoreId } = useParams();

  // 전역 DB 불러오기
  const DB = useRecoilValue<IdbState[]>(dbState);
  const [markers, setMarkers] = useState<any[]>([]);

  // 지도가 표시될 HTML element
  const mapContainer = useRef(null);

  // map 객체를 저장할 state
  const [map, setMap] = useState<any>(null);
  const [markerImage, setMarkerImage] = useState<any>(null);

  // 현재 클릭한 bookstroreId를 저장할 state
  const [currentOverlayStoreId, setCurrentOverlayStoreId] = useState<any>(null);

  // * 지도를 생성하는 함수
  const makeMap = useCallback(() => {
    // 지도를 생성할 때 필요한 기본 옵션
    let options = {
      center: new kakao.maps.LatLng(37.56839464, 126.9303023), // 지도의 중심 좌표
      level: 10, // 지도의 확대 수준
    };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성함
    const newMap = new kakao.maps.Map(mapContainer.current, options);

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤 생성
    const zoomControl = new kakao.maps.ZoomControl();
    newMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커 이미지 생성
    const imageSrc = require('../../assets/images/marker.png');
    const imageSize = new kakao.maps.Size(28, 28);
    setMarkerImage(new kakao.maps.MarkerImage(imageSrc, imageSize));

    setMap(newMap);
  }, []);

  // * 마커를 생성하는 함수
  const makeMarkers = useCallback(() => {
    if (!markerImage) return;

    // 기존 마커 제거
    if (markers.length > 0) {
      markers.forEach((marker: any) => marker.setMap(null));
    }

    // 마커 표시하기
    const newMarkers: any[] = [];
    DB.forEach((store) => {
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        title: store.FCLTY_NM, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨
        position: new kakao.maps.LatLng(store.FCLTY_LA, store.FCLTY_LO), // 마커를 표시할 위치(위도, 경도)
        image: markerImage, // 커스텀 마커 이미지 설정
        id: store.ESNTL_ID, // 마커에 ESNTL_ID를 id로 설정
      });

      // 마커 클릭시 해당 bookstoreId로 라우터 이동
      kakao.maps.event.addListener(marker, 'click', () =>
        navigate(`/map/${store.ESNTL_ID}`),
      );

      // 마커를 배열에 저장
      newMarkers.push(marker);
    });

    // 마커 배열을 state에 저장
    setMarkers(newMarkers);

    // eslint-disable-next-line
  }, [DB, map, markerImage]);

  // * 첫 렌더링 시 지도 생성
  useEffect(() => {
    makeMap();
  }, [makeMap]);

  // * DB가 변경되면 마커 생성
  useEffect(() => {
    makeMarkers();
  }, [DB, makeMarkers, markerImage]);

  // * 라우터 파라미터로 받은 bookstoreId 값에 따라 지도 이동
  useEffect(() => {
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
    //eslint-disable-next-line
  }, [bookstoreId, map, DB]);

  return (
    <S.Container>
      <InfoWrapper map={map} />
      <S.MapContainer ref={mapContainer} />
    </S.Container>
  );
}
