import InfoWrapper from './InfoWrapper/InfoWrapper';
import styled from 'styled-components';
import { PAGE_HEIGHT } from '../../common/layout';
import { useEffect, useRef, useState } from 'react';
import { LIGHT_GRAY_COLOR } from '../../common/colors';
import { useRecoilValue } from 'recoil';
import { dbState } from '../../store/selectors';
import { IdbState } from '../../store/selectors';

const { kakao } = window;

// kakao 객체를 window 객체의 interface로 추가
declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  // 전역 DB 불러오기
  const DB = useRecoilValue<IdbState[]>(dbState);

  // 지도가 표시될 HTML element
  const mapContainer = useRef(null);

  // map을 자식 컴포넌트에 props로  넘김
  const [map, setMap] = useState(null);

  // 카카오 지도 생성하기, 마커 표시하기
  const handleMap = () => {
    // 지도를 생성할 때 필요한 기본 옵션
    let options = {
      center: new kakao.maps.LatLng(37.56839464, 126.9303023), // 지도의 중심 좌표
      level: 10, // 지도의 확대 수준
    };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성함
    const map = new kakao.maps.Map(mapContainer.current, options);
    setMap(map);

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤 생성
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커 이미지 생성
    const imageSrc = 'images/marker.png';
    const imageSize = new kakao.maps.Size(28, 28);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커 표시하기
    DB.forEach((store) => {
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        title: store.FCLTY_NM, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨
        position: new kakao.maps.LatLng(store.FCLTY_LA, store.FCLTY_LO), // 마커를 표시할 위치(위도, 경도)
        image: markerImage, // 커스텀 마커 이미지 설정
      });

      // 마커 클릭 이벤트
      kakao.maps.event.addListener(marker, 'click', function () {
        // 클릭한 마커의 좌표를 반환함
        const markerPosition = marker.getPosition();

        // 마커 클릭 시 이동 좌표 지정
        const moveLatLon = new kakao.maps.LatLng(
          markerPosition.Ma,
          markerPosition.La,
        );

        // 지도 중심을 부드럽게 이동함
        map.panTo(moveLatLon);
        // map.setLevel(4); // 지도 확대 레벨 설정
      });
    });
  };

  useEffect(() => {
    handleMap();
  }, [DB]);

  return (
    <S.Container>
      <InfoWrapper map={map} />
      <S.MapContainer ref={mapContainer} />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    height: ${PAGE_HEIGHT}px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: inherit;
      overflow-y: auto;
    }
  `,
  MapContainer: styled.div`
    font-family: 'Pretendard-Regular';
    flex: 1 1 auto;
    background-color: ${LIGHT_GRAY_COLOR};
    height: ${PAGE_HEIGHT}px;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 500px;
    }
  `,
};
