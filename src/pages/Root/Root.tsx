import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { WINDOW_HEIGHT } from '../../common/layout';
import Header from '../../components/Layout/Header';

export default function Root() {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    height: ${WINDOW_HEIGHT};
  `,
};
