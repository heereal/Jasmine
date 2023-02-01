import styled from 'styled-components';
import colors from '../../../../common/colors';

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.BLACK};
  padding: 1rem 0;
  cursor: pointer;
`;

export const NameRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export const Name = styled.span`
  height: 0.8rem;
  margin-right: 0.5rem;
  transition: 80ms ease-in-out;
  &:hover {
    color: ${colors.PINK};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 0.9rem;
  color: ${colors.DARK_GRAY};
`;
