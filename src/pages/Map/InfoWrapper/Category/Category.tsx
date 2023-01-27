import { Dispatch, SetStateAction } from 'react';
import { BLACK_COLOR, LIGHT_GRAY_COLOR } from '../../../../common/colors';
import { categories } from '../../../../common/data';
import { useCategory } from '../../../../hooks/useCategory';
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
  const { handleCategoryClick } = useCategory(
    currentCategory,
    setCurrentCategory,
    setOpenCategory,
  );

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
