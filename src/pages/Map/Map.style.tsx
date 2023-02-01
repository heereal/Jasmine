import styled from 'styled-components';
import colors from '../../common/colors';
import { HEADER_HEIGHT } from '../../common/layout';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - ${HEADER_HEIGHT});
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const MapContainer = styled.div`
  font-family: 'Pretendard-Regular';
  flex: 1 1 auto;
  background-color: ${colors.LIGHT_GRAY};
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 600px;
  }
`;
