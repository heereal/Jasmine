export const useCategory = (
  currentCategory: any,
  setCurrentCategory: any,
  setOpenCategory: any,
) => {
  const handleCategoryClick = (category: string) => {
    // 현재 카테고리와 같은 카테고리를 클릭했을 경우 초기화
    if (currentCategory === category) {
      setCurrentCategory('카테고리 선택');
      setOpenCategory(false);
      return;
    }
    // 현재 카테고리와 다른 카테고리를 클릭했을 경우 카테고리 변경
    setCurrentCategory(category);
    setOpenCategory(false);
  };

  return { handleCategoryClick };
};
