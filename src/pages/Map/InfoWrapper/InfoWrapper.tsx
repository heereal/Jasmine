import { FormEvent, useState } from 'react';
import {
  DARK_GRAY_COLOR,
  GREEN_COLOR,
  LIGHT_GRAY_COLOR,
} from '../../../common/colors';

import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { MdCircle } from 'react-icons/md';
import { BiCurrentLocation } from 'react-icons/bi';

import { data } from '../../../bookstore';

import * as S from './InfoWrapper.style';
import ResultItem from './ResultItem/ResultItem';
import Category from './Category/Category';

enum openFilterEnum {
  OPEN = 0,
  CLOSE = 1,
  ALL = 2,
}

export default function InfoWrapper() {
  const [search, setSearch] = useState<string>('');
  const [currentCategory, setCurrentCategory] =
    useState<string>('카테고리 선택');
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [parking, setParking] = useState<boolean>(false);
  const [cafe, setCafe] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<number>(openFilterEnum.ALL);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
  };

  const handleOpenStatusClick = (idx: number) => {
    if (openFilter === idx) {
      setOpenFilter(openFilterEnum.ALL);
      return;
    }
    setOpenFilter(idx);
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
        {/* 카테고리 */}
        <S.CategoryContainer>
          <S.Category onClick={() => setOpenCategory((prev) => !prev)}>
            {currentCategory}
          </S.Category>
          {openCategory && (
            <Category
              setOpenCategory={setOpenCategory}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          )}
        </S.CategoryContainer>
        {/* 주차 */}
        <S.Filter
          width="20%"
          onClick={() => setParking((prev) => !prev)}
          backgroundColor={parking ? LIGHT_GRAY_COLOR : 'transparent'}
        >
          <FaParking />
        </S.Filter>
        {/* 카페 */}
        <S.Filter
          width="20%"
          onClick={() => setCafe((prev) => !prev)}
          backgroundColor={cafe ? LIGHT_GRAY_COLOR : 'transparent'}
        >
          <IoCafeOutline />
        </S.Filter>
      </S.Filters>

      {/* 영업 상태 */}
      <S.Filters>
        {openStatus.map(({ status, color }, idx) => (
          <S.Filter
            width="33%"
            key={idx}
            onClick={() => handleOpenStatusClick(idx)}
            backgroundColor={
              openFilter === idx ? LIGHT_GRAY_COLOR : 'transparent'
            }
          >
            <MdCircle
              style={{
                color: color,
                marginRight: '0.2rem',
              }}
            />
            <span>{status}</span>
          </S.Filter>
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
          {data.slice(0, 20).map((item, idx) => {
            return <ResultItem info={item} key={idx} />;
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
    color: DARK_GRAY_COLOR,
  },
];
