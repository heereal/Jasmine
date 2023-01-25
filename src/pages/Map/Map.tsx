import InfoWrapper from './InfoWrapper/InfoWrapper';
import MapWrapper from './MapWrapper/MapWrapper';
import styled from 'styled-components';
import { PAGE_HEIGHT } from '../../common/layout';

export default function Map() {
  return (
    <S.Container>
      <InfoWrapper />
      <MapWrapper />
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
};
