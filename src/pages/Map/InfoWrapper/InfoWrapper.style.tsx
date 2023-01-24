import styled from 'styled-components';
import { BLACK_COLOR, LIGHT_GRAY_COLOR } from '../../../common/colors';
import { PAGE_HEIGHT } from '../../../common/layout';

export const Container = styled.div`
  padding: 1rem;
  height: ${PAGE_HEIGHT};
  width: 40%;
  min-width: 300px;
  max-width: 500px;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    overflow-y: hidden;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid ${BLACK_COLOR};
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
`;

export const SearchButton = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: transparent;
  position: absolute;
  right: 0;
  padding-right: 1rem;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const Category = styled.button`
  flex: 1 1 auto;
  text-align: center;
  border: 1px solid ${BLACK_COLOR};
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchCurrentLocation = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 0 1.5rem 0;
  margin: auto;
  cursor: pointer;
`;

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  padding-bottom: 0.5rem;
`;

export const Summary = styled.div`
  width: 100%;
  font-size: 0.8rem;
  color: ${LIGHT_GRAY_COLOR};
  border-bottom: 1px solid ${BLACK_COLOR};
  padding-bottom: 0.5rem;
`;

export const ResultItemContainer = styled.div`
  width: 100%;
`;
