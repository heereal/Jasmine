import Menu from './Menu';
import * as S from './Header.style';

export default function Header() {
  return (
    <S.Container>
      <S.Logo src="images/logo.png" alt="" />
      <S.Menus>
        <Menu to="/" label="홈" />
        <Menu to="/map" label="서점찾기" />
      </S.Menus>
    </S.Container>
  );
}
