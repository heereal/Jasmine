import styled from 'styled-components';
import { LIGHT_GRAY_COLOR } from '../../../common/colors';
import { PAGE_HEIGHT } from '../../../common/layout';

export default function MapWrapper() {
  return <S.Container>지도</S.Container>;
}

const S = {
  Container: styled.div`
    flex: 1 1 auto;
    background-color: ${LIGHT_GRAY_COLOR};
    height: ${PAGE_HEIGHT}px;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 500px;
    }
  `,
};
