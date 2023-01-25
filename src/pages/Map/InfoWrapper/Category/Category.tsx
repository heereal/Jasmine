import { Dispatch, SetStateAction } from 'react';
import { BLACK_COLOR, LIGHT_GRAY_COLOR } from '../../../../common/colors';
import { categories } from '../../../../common/data';
import * as S from './Category.style';

interface CategoryProps {
  setOpenCategory: Dispatch<SetStateAction<boolean>>;
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
}

export default function Category({
  setOpenCategory,
  currentCategory,
  setCurrentCategory,
}: CategoryProps) {
  // 카테고리 클릭 핸들링 함수
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

  return (
    <S.Container>
      {categories.map((category, idx) => (
        <S.Li
          onClick={() => handleCategoryClick(category)}
          key={idx}
          // 현재 카테고리일 경우 검은색, 아닐 경우 회색
          color={currentCategory === category ? BLACK_COLOR : LIGHT_GRAY_COLOR}
        >
          {category}
        </S.Li>
      ))}
    </S.Container>
  );
}
