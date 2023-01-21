<<<<<<< HEAD
import InfoWrapper from './InfoWrapper/InfoWrapper';
import MapWrapper from './MapWrapper/MapWrapper';
import * as S from './Map.style';

export default function Map() {
  return (
    <S.Container>
      <InfoWrapper />
      <MapWrapper />
    </S.Container>
  );
}
=======
import KaokaoMap from "../../components/Layout/KakaoMap/KakaoMap"

export default function Map() {

    return (
        <KaokaoMap />
    )

};
>>>>>>> aace63d (feat: kakao 지도 api 불러오기 성공)
