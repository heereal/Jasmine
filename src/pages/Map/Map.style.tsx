import styled from 'styled-components';
import { LIGHT_GRAY_COLOR } from '../../common/colors';
import { PAGE_HEIGHT } from '../../common/layout';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: ${PAGE_HEIGHT}px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: inherit;
    overflow-y: auto;
  }
`;

export const MapContainer = styled.div`
  font-family: 'Pretendard-Regular';
  flex: 1 1 auto;
  background-color: ${LIGHT_GRAY_COLOR};
  height: ${PAGE_HEIGHT}px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 500px;
  }
`;
