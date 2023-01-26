import styled from 'styled-components';
import { BLACK_COLOR, PINK_COLOR, WHITE_COLOR } from '../../../common/colors';

export const Overlay = styled.div`
  position: absolute;
  background-color: ${WHITE_COLOR};
  opacity: 0.9;
  z-index: 3;
  width: 400px;
  left: -200px;
  top: -280px;
  padding: 1rem;
  border: 1px solid ${BLACK_COLOR};
  border-radius: 0.5rem;
`;

export const NameRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export const Name = styled.span`
  margin-right: 0.5rem;
  transition: 80ms ease-in-out;
  &:hover {
    color: ${PINK_COLOR};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;

export const Category = styled.div`
  font-size: 0.9rem;
  border-radius: 6px;
  border: 1px solid ${BLACK_COLOR};
  padding: 0.2rem 0.5rem;
`;

export const Address = styled.div`
  padding-bottom: 1rem;
  font-size: 0.9rem;
`;

export const Description = styled.div`
  font-size: 0.9rem;
  color: ${BLACK_COLOR};
  margin-bottom: 1rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 0.8rem;
  line-height: 1.3;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RowHeader = styled.div`
  color: ${BLACK_COLOR};
  min-width: 70px;
  margin-right: 1rem;
`;

export const RowContent = styled.div`
  font-size: 0.9rem;
  color: ${BLACK_COLOR};
`;
