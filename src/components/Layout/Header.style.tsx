import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../common/layout';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  height: ${HEADER_HEIGHT};
`;

export const Logo = styled.img`
  width: 150px;
  margin-right: 50px;
`;

export const Menus = styled.ul`
  display: flex;
  flex-direction: row;
`;