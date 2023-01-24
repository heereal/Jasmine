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
import { BiCurrentLocation } from 'react-icons/bi';
import ResultItem from './ResultItem/ResultItem';
import { data } from '../../../bookstore';
import * as S from './InfoWrapper.style';

export default function InfoWrapper() {
  const [search, setSearch] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    setSearch('');
  };

  return (
    <S.Container>
      {/* 검색 */}
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchInput
          type="text"
          placeholder="서점을 찾아보세요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <S.SearchButton type="submit" value="검색" />
      </S.SearchForm>

      {/* 필터 */}
      <S.Filters>
        <S.Category>카테고리 전체</S.Category>
        <Filter component={<FaParking />} width="20%" margin="left" />
        <Filter component={<IoCafeOutline />} width="20%" margin="left" />
      </S.Filters>

      {/* 영업 상태 */}
      <S.Filters>
        {openStatus.map(({ status, color }) => (
          <Filter
            component={
              <S.IconContainer>
                <MdCircle
                  style={{
                    color: color,
                    marginRight: '0.2rem',
                  }}
                />
                <span>{status}</span>
              </S.IconContainer>
            }
            width="33%"
            margin="right"
          />
        ))}
      </S.Filters>

      {/* 내 위치로 검색하기 */}
      <S.SearchCurrentLocation>
        <BiCurrentLocation />
        <span>내 위치로 검색하기</span>
      </S.SearchCurrentLocation>

      {/* 검색 결과 */}
      <S.SearchResultContainer>
        <S.Summary>총 300건의 검색결과</S.Summary>
        <S.ResultItemContainer>
          {data.slice(0, 20).map((item) => {
            return <ResultItem info={item} />;
          })}
        </S.ResultItemContainer>
      </S.SearchResultContainer>
    </S.Container>
  );
}

// 영업 상태
const openStatus = [
  {
    status: '영업중',
    color: GREEN_COLOR,
  },
  {
    status: '영업종료',
    color: LIGHT_GRAY_COLOR,
  },
];
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
    cursor: pointer;
    ${margin === 'left' && 'margin-left: 1rem;'}
    ${margin === 'right' && 'margin-right: 1rem;'}
  `;

  return <Wrapper>{component}</Wrapper>;
}
