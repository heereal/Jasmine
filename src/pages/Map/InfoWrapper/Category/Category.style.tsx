import styled from 'styled-components';
import { BLACK_COLOR, WHITE_COLOR } from '../../../../common/colors';

export const Container = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  z-index: 1;
  /* color: ${({ color }: any) => color}; */
  color: ${BLACK_COLOR};
  cursor: pointer;
  display: inline-block;
  padding: 0.6rem 1rem;
  border: 1px solid ${BLACK_COLOR};
  background-color: ${WHITE_COLOR};
  text-align: center;
  font-size: 0.9rem;
  &:not(:first-child) {
    border-top: none;
    &:hover {
      background-color: ${BLACK_COLOR};
      color: ${WHITE_COLOR};
    }
  }
`;
