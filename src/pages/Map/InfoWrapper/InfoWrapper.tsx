import React from 'react';
import styled from 'styled-components';
import {
  BLACK_COLOR,
  GREEN_COLOR,
  LIGHT_GRAY_COLOR,
} from '../../../common/colors';
import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { MdCircle } from 'react-icons/md';

export default function InfoWrapper() {
  const [search, setSearch] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    setSearch('');
  };

  return (
    <Container>
      {/* 검색 */}
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="서점을 찾아보세요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton type="submit" value="검색" />
      </SearchForm>

      {/* 필터 */}
      <Filters>
        <Category>카테고리 전체</Category>
        <Filter component={<FaParking />} width="25%" margin="left" />
        <Filter component={<IoCafeOutline />} width="25%" margin="left" />
      </Filters>

      {/* 영업 상태 */}
      <Filters>
        <Filter
          component={
            <IconContainer>
              <MdCircle
                style={{
                  color: GREEN_COLOR,
                  marginRight: '0.2rem',
                }}
              />
              <span>영업중</span>
            </IconContainer>
          }
          width="33%"
          margin="right"
        />
        <Filter
          component={
            <IconContainer>
              <MdCircle
                style={{
                  color: LIGHT_GRAY_COLOR,
                  marginRight: '0.2rem',
                }}
              />
              <span>영업종료</span>
            </IconContainer>
          }
          width="33%"
        />
      </Filters>
    </Container>
  );
}

const Container = styled.div`
  width: 30%;
  min-width: 300px;
  padding: 10px;
`;

const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 1px solid ${BLACK_COLOR};
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
`;

const SearchButton = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: transparent;
  position: absolute;
  right: 0;
  padding-right: 1rem;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const Category = styled.button`
  text-align: center;
  width: 50%;
  border: 1px solid ${BLACK_COLOR};
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface FilterProps {
  component: React.ReactNode;
  width?: string;
  margin?: string;
}

function Filter({ component, width, margin }: FilterProps) {
  const Wrapper = styled.button`
    background-color: transparent;
    text-align: center;
    width: ${width};
    border: 1px solid ${BLACK_COLOR};
    outline: none;
    font-size: 1rem;
    padding: 0.5rem 0;
    ${margin === 'left' && 'margin-left: 1rem;'}
    ${margin === 'right' && 'margin-right: 1rem;'}
  `;

  return <Wrapper>{component}</Wrapper>;
}
