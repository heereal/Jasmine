import styled from 'styled-components';
import colors from '../../../common/colors';

export const Overlay = styled.div`
  position: absolute;
  background-color: ${colors.WHITE};
  opacity: 0.9;
  z-index: 3;
  width: 400px;
  transform: translate(-50%, -115%);
  padding: 1rem;
  border: 1px solid ${colors.BLACK};
  border-radius: 0.5rem;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const NameRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;
  @media screen and (max-width: 768px) {
    padding-bottom: 0.4rem;
  }
`;

export const Name = styled.span`
  margin-right: 0.5rem;
  transition: 80ms ease-in-out;
  &:hover {
    color: ${colors.PINK};
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
  border: 1px solid ${colors.BLACK};
  padding: 0.2rem 0.5rem;
`;

export const Address = styled.div`
  padding-bottom: 1rem;
  font-size: 0.9rem;
`;

export const Description = styled.div`
  white-space: pre-wrap;
  font-size: 0.9rem;
  color: ${colors.BLACK};
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 0.8rem;
  line-height: 1.3;
  @media screen and (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RowHeader = styled.div`
  color: ${colors.BLACK};
  min-width: 70px;
  margin-right: 1rem;
`;

export const RowContent = styled.div`
  white-space: pre-wrap;
  font-size: 0.9rem;
  color: ${colors.BLACK};
`;
