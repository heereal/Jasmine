import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../common/layout';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  height: ${HEADER_HEIGHT};
  font-family: 'MaruBuri-SemiBold';
`;

export const Logo = styled.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-select: none;
  width: 150px;
  margin-right: 50px;
  cursor: pointer;
`;

export const Menus = styled.ul`
  display: flex;
  flex-direction: row;
`;
