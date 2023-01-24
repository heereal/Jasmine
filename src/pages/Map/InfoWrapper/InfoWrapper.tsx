import { FormEvent, useState } from 'react';
import { GREEN_COLOR, LIGHT_GRAY_COLOR } from '../../../common/colors';

import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { MdCircle } from 'react-icons/md';
import { BiCurrentLocation } from 'react-icons/bi';

import { data } from '../../../bookstore';

import * as S from './InfoWrapper.style';
import ResultItem from './ResultItem/ResultItem';
import Category from './Category/Category';

export default function InfoWrapper() {
  const [search, setSearch] = useState<string>('');
  const [currentCategory, setCurrentCategory] =
    useState<string>('카테고리 선택');
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        <div
          style={{ width: '60%', marginRight: '1rem', position: 'relative' }}
        >
          <S.Category onClick={() => setOpenCategory((prev) => !prev)}>
            {currentCategory}
          </S.Category>
          {openCategory && (
            <Category
              openCategory={openCategory}
              setOpenCategory={setOpenCategory}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          )}
        </div>
        <S.Filter width="20%">
          <FaParking />
        </S.Filter>
        <S.Filter width="20%">
          <IoCafeOutline />
        </S.Filter>
      </S.Filters>

      {/* 영업 상태 */}
      <S.Filters>
        {openStatus.map(({ status, color }, idx) => (
          <S.Filter width="33%" key={idx}>
            <S.IconContainer>
              <MdCircle
                style={{
                  color: color,
                  marginRight: '0.2rem',
                }}
              />
              <span>{status}</span>
            </S.IconContainer>
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
    color: LIGHT_GRAY_COLOR,
  },
];
