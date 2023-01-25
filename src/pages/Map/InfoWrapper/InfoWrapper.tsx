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

import Fuse from 'fuse.js';

// 영업 상태 enum
enum openFilterEnum {
  OPEN = 0,
  CLOSE = 1,
  ALL = 2,
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

export default function InfoWrapper() {
  // 검색어
  const [search, setSearch] = useState<string>('');

  // 현재 카테고리
  const [currentCategory, setCurrentCategory] =
    useState<string>('카테고리 선택');
  // 카테고리 드롭다운 상태
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  // 주차, 카페
  const [parking, setParking] = useState<boolean>(false);
  const [cafe, setCafe] = useState<boolean>(false);

  // 영업 상태
  const [openFilter, setOpenFilter] = useState<number>(openFilterEnum.ALL);

  // 검색 form 제출 핸들링 함수
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      includeScore: true,
      threshold: 0.3,
      keys: ['FCLTY_NM'],
    };

    const fuse = new Fuse(data, options);

    const result = fuse.search(search);
    console.log(result);
    setSearch('');
  };

  // 영업 상태 클릭 핸들링 함수
  const handleOpenStatusClick = (idx: number) => {
    // 같은 버튼 클릭 시 전체로 변경
    if (openFilter === idx) {
      setOpenFilter(openFilterEnum.ALL);
      return;
    }
    // 다른 버튼 클릭 시 해당 버튼으로 변경
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
          {/* 카테고리 선택 */}
          <S.Category onClick={() => setOpenCategory(!openCategory)}>
            {currentCategory}
          </S.Category>
          {openCategory && (
            // 드롭다운 메뉴
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
          onClick={() => setParking(!parking)}
          backgroundColor={parking ? LIGHT_GRAY_COLOR : 'transparent'}
        >
          <FaParking />
        </S.Filter>
        {/* 카페 */}
        <S.Filter
          width="20%"
          onClick={() => setCafe(!cafe)}
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
        <BiCurrentLocation style={{ marginRight: '0.5rem' }} />
        <span>내 위치로 검색하기</span>
      </S.SearchCurrentLocation>

      {/* 검색 결과 */}
      <S.SearchResultContainer>
        <S.Summary>총 300건의 검색결과</S.Summary>
        <S.ResultItemContainer>
          {/* TODO: 검색결과 일정 개수만 보여주기 + 무한스크롤 */}
          {/* TODO: 검색결과 없을 때 예외처리 */}
          {/* {data.slice(0, 20).map((item, idx) => {
            return <ResultItem info={item} key={idx} />;
          })} */}
          {data.map((item, idx) => {
            return <ResultItem info={item} key={idx} />;
          })}
        </S.ResultItemContainer>
      </S.SearchResultContainer>
    </S.Container>
  );
}
