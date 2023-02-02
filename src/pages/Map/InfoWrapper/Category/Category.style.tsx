import styled from 'styled-components';
import colors from '../../../../common/colors';

export const Container = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  z-index: 1;
  color: ${colors.BLACK};
  cursor: pointer;
  display: inline-block;
  padding: 0.6rem 1rem;
  border: 1px solid ${colors.BLACK};
  background-color: ${colors.WHITE};
  text-align: center;
  font-size: 0.9rem;
  &:not(:first-child) {
    border-top: none;
    &:hover {
      background-color: ${colors.BLACK};
      color: ${colors.WHITE};
    }
  }
`;
