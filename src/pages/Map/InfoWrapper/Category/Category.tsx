import { BLACK_COLOR, LIGHT_GRAY_COLOR } from '../../../../common/colors';
import * as S from './Category.style';

export default function Category({
  setOpenCategory,
  currentCategory,
  setCurrentCategory,
}: any) {
  return (
    <S.Container>
      {categories.map((category, idx) => (
        <S.Li
          onClick={() => {
            setCurrentCategory(category);
            setOpenCategory(false);
          }}
          key={idx}
          color={currentCategory === category ? BLACK_COLOR : LIGHT_GRAY_COLOR}
        >
          {category}
        </S.Li>
      ))}
    </S.Container>
  );
}

const categories = [
  '인문서적',
  '일반서적',
  '독립서적',
  '학습서적',
  '문학서적',
  '사진서적',
  '예술서적',
  '중고서적',
  '아동서적',
  '그림서적',
  '과학서적',
  '디자인서적',
  '여행서적',
  '외국서적',
];
