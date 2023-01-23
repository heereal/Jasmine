import styled from 'styled-components';
import Menu from './Menu';

export default function Header() {
  return (
    <Container>
      <Logo src="images/logo.png" alt="" />
      <Menus>
        <Menu to="/" label="홈" />
        <Menu to="/map" label="서점찾기" />
      </Menus>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const Logo = styled.img`
  width: 150px;
  margin-right: 50px;
`;

const Menus = styled.ul`
  display: flex;
  flex-direction: row;
`;
