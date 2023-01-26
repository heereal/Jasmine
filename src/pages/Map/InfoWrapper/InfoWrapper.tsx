import { FormEvent, useCallback, useEffect, useState } from 'react';
import {
  BLUE_COLOR,
  DARK_GRAY_COLOR,
  GREEN_COLOR,
  LIGHT_GRAY_COLOR,
} from '../../../common/colors';

import { data } from '../../../bookstore';

import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { MdCircle } from 'react-icons/md';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';

import * as S from './InfoWrapper.style';
import ResultItem from './ResultItem/ResultItem';
import Category from './Category/Category';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentLocationState, markerState } from '../../../store/selectors';
import useGeolocation from '../../../hooks/useGeolocation';

import { dbState, IdbState } from '../../../store/selectors';

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

export default function InfoWrapper({ map }: any) {
  // 현재 위치 가져오기
  const location = useGeolocation();
  const setCurrentLocation = useSetRecoilState(currentLocationState);
  const [currentCircle, setCurrentCircle] = useState<any>(null);

  // 페이지 로드 시 현재 위치 저장
  useEffect(() => {
    if (!location) return;
    setCurrentLocation(location);
  }, [location, setCurrentLocation]);

  // db 전역 상태
  const [DB, setDB] = useRecoilState<IdbState[]>(dbState);
  // markers 배열을 저장할 state
  const [markers, setMarkers] = useRecoilState(markerState);

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

  // 검색결과 데이터 끝 여부
  const [isEndOfData, setIsEndOfData] = useState<boolean>(false);
  const [countOfData, setCountOfData] = useState<number>(10);

  // 검색 form 제출 핸들링 함수
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let result = data.filter((item) => item.FCLTY_NM.includes(search));

    setDB(result);
    setSearch('');
  };

  // 영업 상태 클릭 핸들링 함수
  const handleOpenStatusClick = useCallback(
    (idx: number) => {
      // 같은 버튼 클릭 시 전체로 변경
      if (openFilter === idx) {
        setOpenFilter(openFilterEnum.ALL);
        return;
      }
      // 다른 버튼 클릭 시 해당 버튼으로 변경
      setOpenFilter(idx);
    },
    [openFilter],
  );

  // 더보기 버튼 클릭 핸들링 함수
  const handleLoadMoreButtonClick = useCallback(() => {
    if (countOfData + 10 >= DB.length) {
      setCountOfData(DB.length);
      setIsEndOfData(true);
      return;
    }
    setCountOfData(countOfData + 10);
  }, [countOfData, DB.length]);

  // 검색 결과 초기화 핸들링 함수
  const handleResetResult = useCallback(() => {
    setDB(data);
    setCurrentCategory('카테고리 선택');
    setCafe(false);
    setParking(false);
    setOpenFilter(2);
  }, [setDB, setCurrentCategory, setCafe, setParking, setOpenFilter]);

  // 내 위치로 검색하기 버튼 클릭 핸들링 함수
  const handleSearchCurrentLocationClick = useCallback(() => {
    // 필터 초기화
    handleResetResult();

    // 현재 위치가 없을 경우 return
    if (!location || !map) return;

    // 현재 위치로 지도 이동
    map.setLevel(8);
    map.panTo(
      new window.kakao.maps.LatLng(
        location.coordinates?.lat,
        location.coordinates?.lng,
      ),
    );

    // 이전 반경 표시 삭제
    currentCircle && currentCircle.setMap(null);

    // 현재 위치 반경 5km 표시
    const circle = new window.kakao.maps.Circle({
      center: new window.kakao.maps.LatLng(
        location.coordinates?.lat,
        location.coordinates?.lng,
      ),
      radius: 5000,
      strokeWeight: 1,
      strokeColor: BLUE_COLOR,
      strokeOpacity: 0.8,
      fillColor: BLUE_COLOR,
      fillOpacity: 0.2,
    });
    circle.setMap(map);

    // 현재 위치 반경 표시 저장
    setCurrentCircle(circle);

    console.log(map.getCenter());
    markers.forEach((marker) => {
      marker.setMap(null);
    }
    

  }, [location, map, handleResetResult, currentCircle]);

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
        <S.ResetButton onClick={handleResetResult}>
          <BiX />
        </S.ResetButton>
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
      <S.SearchCurrentLocation onClick={handleSearchCurrentLocationClick}>
        <BiCurrentLocation style={{ marginRight: '0.5rem' }} />
        <span>내 위치로 검색하기</span>
      </S.SearchCurrentLocation>

      {/* 전체 결과 */}
      <S.SearchResultContainer>
        <S.Summary>총 {DB.length}건의 검색결과</S.Summary>
        <S.ResultItemContainer>
          {/* TODO: 검색결과 없을 때 예외처리 */}
          {DB.slice(0, countOfData).map((item, idx) => {
            return <ResultItem info={item} key={idx} />;
          })}
        </S.ResultItemContainer>
        {/* 더보기 버튼 */}
        {isEndOfData || (
          <S.LoadMoreButton onClick={handleLoadMoreButtonClick}>
            더보기
          </S.LoadMoreButton>
        )}
      </S.SearchResultContainer>
    </S.Container>
  );
}
