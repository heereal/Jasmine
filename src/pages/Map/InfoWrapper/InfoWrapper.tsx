import { FormEvent, useCallback, useState } from 'react';

import { useRecoilState } from 'recoil';
import {
  currentLocationState,
  dbState,
  IdbState,
} from '../../../store/selectors';

import { data } from '../../../bookstore';
import {
  BLUE_COLOR,
  DARK_GRAY_COLOR,
  GREEN_COLOR,
  LIGHT_GRAY_COLOR,
} from '../../../common/colors';

import useGeolocation from '../../../hooks/useGeolocation';

import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { MdCircle } from 'react-icons/md';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';

import * as S from './InfoWrapper.style';
import ResultItem from './ResultItem/ResultItem';
import Category from './Category/Category';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  // 현재 위치 가져오기
  const location = useGeolocation();
  // 현재 위치 전역 상태
  const [currentLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);
  // 현재 표시되는 반경
  const [currentCircle, setCurrentCircle] = useState<any>(null);

  // db 전역 상태
  const [DB, setDB] = useRecoilState<IdbState[]>(dbState);

  // 검색어
  const [search, setSearch] = useState<string>('');

  // 현재 카테고리
  const [currentCategory, setCurrentCategory] =
    useState<string>('카테고리 선택');
  // 카테고리 드롭다운 상태
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  // 주차, 카페, 영업 상태 필터
  const [parking, setParking] = useState<boolean>(false);
  const [cafe, setCafe] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<number>(openFilterEnum.ALL);

  // 검색결과 데이터 끝 여부
  const [isEndOfData, setIsEndOfData] = useState<boolean>(false);
  const [countOfData, setCountOfData] = useState<number>(10);

  //! 검색 form 제출 핸들링 함수
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 검색 결과 필터
    let result = data.filter((item) => item.FCLTY_NM.includes(search));

    // 검색어, 카테고리, 주차, 카페, 영업 상태 필터

    if (currentCategory !== '카테고리 선택') {
      result = result.filter((item) => item.MLSFC_NM.includes(currentCategory));
    }

    if (parking) {
      result = result.filter((item) => item.ADIT_DC.includes('주차'));
    }

    if (cafe) {
      result = result.filter((item) => item.ADIT_DC.includes('카페'));
    }

    // 영업 중 / 영업 종료 추가

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
    // 현재 위치가 없으면 return
    if (!location || !map) return;

    navigate('/map');

    // const defaultLocation = new window.kakao.maps.LatLng(
    //   37.566826,
    //   126.9786567,
    // );

    // 현재 중심 위치
    const currentCenter = new window.kakao.maps.LatLng(
      location.coordinates?.lat,
      location.coordinates?.lng,
    );

    // 이전 위치와 같으면 return
    if (currentLocation === location) return;

    // 현재 위치 전역 상태 저장
    setCurrentLocation(location);

    // 이전 반경 표시 삭제
    currentCircle && currentCircle.setMap(null);

    // 필터 초기화 (전체 검색 결과에서 위치 표시)
    handleResetResult();

    // 중심에서 5km 반경 내의 데이터 필터링 후 DB에 저장
    const newDB: any[] = [];
    data.forEach((store) => {
      // 서점의 위치
      const storeLocation = new window.kakao.maps.LatLng(
        store.FCLTY_LA,
        store.FCLTY_LO,
      );

      const poly = new window.kakao.maps.Polyline({
        path: [currentCenter, storeLocation],
      });

      // 서점과 현재 위치의 거리
      const distance = poly.getLength();
      if (distance <= 5000) {
        newDB.push(store);
      }
    });
    setDB(newDB);

    // 현재 위치로 지도 이동
    map.setLevel(7);
    map.panTo(currentCenter);

    // 현재 위치 반경 5km 표시
    const circle = new window.kakao.maps.Circle({
      center: currentCenter,
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
    // eslint-disable-next-line
  }, [
    currentCircle,
    location,
    map,
    setCurrentLocation,
    handleResetResult,
    setDB,
  ]);

  return (
    <S.Container>
      {/* 검색 */}
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchInput
          type="text"
          placeholder="서점을 찾아보세요"
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
