import {
  BLACK_COLOR,
  DARK_GRAY_COLOR,
  LIGHT_GRAY_COLOR,
} from '../../../common/colors';
import { useEffect, useRef, useState } from 'react';
import { data } from '../../../bookstore';
import * as S from './MapWrapper.style';
import { MdCircle } from 'react-icons/md';
import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import * as ReactDOMServer from 'react-dom/server';

const { kakao } = window;

// kakao 객체를 window 객체의 interface로 추가
declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapWrapper() {
  const [prevStore, setPrevStore] = useState<any>(null); // 이전에 클릭한 마커의 ESNTL_ID
  const [selectedStore, setSelectedStore] = useState<any>(null); // 현재 클릭한 마커의 ESNTL_ID

  // 지도가 표시될 HTML element
  const container = useRef(null);

  // 카카오 지도 생성하기, 마커 표시하기
  const handleMap = () => {
    // 지도를 생성할 때 필요한 기본 옵션
    let options = {
      center: new kakao.maps.LatLng(37.56839464, 126.9303023), // 지도의 중심 좌표
      level: 10, // 지도의 확대 수준
    };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성함
    const map = new kakao.maps.Map(container.current, options);

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤 생성
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커 이미지 생성
    const imageSrc = require('../../../assets/images/marker.png');
    const imageSize = new kakao.maps.Size(28, 28);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    const Overlay = ({ info }: any) => {
      const {
        FCLTY_NM: name,
        MLSFC_NM: category,
        FCLTY_ROAD_NM_ADDR: address,
        OPTN_DC: description,
      } = info;

      return (
        <S.Overlay
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            width: '400px',
            left: '-200px',
            top: '-290px',
            zIndex: 2,
            padding: '1rem',
            border: `1px solid ${BLACK_COLOR}`,
            borderRadius: '0.5rem',
          }}
        >
          <S.NameRow>
            <S.IconsContainer>
              <MdCircle
                style={{
                  color: LIGHT_GRAY_COLOR,
                  marginRight: '0.5rem',
                }}
              />
              <S.Name>{name}</S.Name>
              <FaParking style={{ marginRight: '0.2rem' }} />
              <IoCafeOutline />
            </S.IconsContainer>
            <S.Category>{category}</S.Category>
            <div
              style={{
                position: 'absolute',
                right: '1rem',
                color: DARK_GRAY_COLOR,
              }}
            >
              <AiOutlineCloseCircle />
            </div>
          </S.NameRow>
          <S.Description>{description}</S.Description>

          <S.Row>
            <S.RowHeader>주소</S.RowHeader>
            <S.RowContent>{address}</S.RowContent>
          </S.Row>
          <S.Row>
            <S.RowHeader>운영시간</S.RowHeader>
            <S.RowContent>
              <div>평일 9시~18시</div>
              <div>주말 9시~18시</div>
            </S.RowContent>
          </S.Row>
          <S.Row>
            <S.RowHeader>휴무</S.RowHeader>
            <S.RowContent>목요일 14:00~20:00, 일요일 정기휴무</S.RowContent>
          </S.Row>
          <S.Row>
            <S.RowHeader>전화</S.RowHeader>
            <S.RowContent>02)064-722-2654</S.RowContent>
          </S.Row>
        </S.Overlay>
      );
    };

    // 마커 표시하기
    data.forEach((store) => {
      console.log('store', store);

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

        // 지도 중심을 부드럽게 이동함z
        map.panTo(moveLatLon);
        // map.setLevel(6); // 지도 확대 레벨 설정

        // 커스텀 오버레이 생성
        const customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: markerPosition,
          content: ReactDOMServer.renderToString(<Overlay info={store} />),
          yAnchor: 1,
        });

        // console.log(prevStore, selectedStore);
        // console.log(customOverlay);
        // prevStore && prevStore.setMap(null);
        // customOverlay.setMap(map);

        setPrevStore(selectedStore);
        setSelectedStore(store);
        // selectedStore.setMap(map);
      });
    });
  };

  useEffect(() => {
    handleMap();
  }, []);

  useEffect(() => {
    console.log(prevStore);
    console.log(selectedStore);
  }, [selectedStore, prevStore]);

  return <S.Container ref={container}></S.Container>;
}
