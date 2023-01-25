import Menu from './Menu';
import * as S from './Header.style';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigation = useNavigate();

  return (
    <S.Container>
      <S.Logo src="images/logo.png" alt="" onClick={() => navigation('/')} />
      <S.Menus>
        <Menu to="/" label="홈" />
        <Menu to="/map" label="서점찾기" />
      </S.Menus>
    </S.Container>
  );
}
