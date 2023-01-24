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
