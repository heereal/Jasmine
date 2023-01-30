import { FormEvent, useCallback, useState } from 'react';

const useSearch = (DBDefault: any, search: any, setDB: any, setSearch: any) => {
  const [currentCategory, setCurrentCategory] =
    useState<string>('카테고리 전체');
  const [parking, setParking] = useState<boolean>(false);
  const [cafe, setCafe] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  // 검색 핸들링 함수
  const handleSearch = useCallback(() => {
    let result = DBDefault;

    if (search) {
      result = result.filter(
        (item: IdbState) =>
          item.FCLTY_NM.includes(search) ||
          item.FCLTY_ROAD_NM_ADDR.includes(search),
      );
    }

    if (currentCategory !== '카테고리 전체') {
      result = result.filter((item: IdbState) =>
        item.MLSFC_NM.includes(currentCategory),
      );
    }

    if (parking) {
      result = result.filter((item: IdbState) => item.ADIT_DC.includes('주차'));
    }

    if (cafe) {
      result = result.filter((item: IdbState) => item.ADIT_DC.includes('카페'));
    }

    if (openFilter === true) {
      result = result.filter((item: IdbState) => item.isOpen === true);
    }

    setDB(result);
    setSearch('');
  }, [
    openFilter,
    DBDefault,
    setDB,
    search,
    setSearch,
    currentCategory,
    parking,
    cafe,
  ]);

  // 검색 form 제출 핸들링 함수
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSearch();
    },
    [handleSearch],
  );

  // 검색 결과 초기화 핸들링 함수
  const handleResetResult = useCallback(() => {
    setDB(DBDefault);
    setCurrentCategory('카테고리 전체');
    setCafe(false);
    setParking(false);
    setOpenFilter(false);
    setSearch('');
  }, [
    setDB,
    setCurrentCategory,
    setCafe,
    setParking,
    setOpenFilter,
    DBDefault,
    setSearch,
  ]);

  return {
    handleSubmit,
    handleSearch,
    handleResetResult,
    setCurrentCategory,
    setCafe,
    setParking,
    setOpenFilter,
    openFilter,
    currentCategory,
    parking,
    cafe,
  };
};

export default useSearch;
