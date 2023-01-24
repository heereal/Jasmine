import { Outlet } from 'react-router-dom';
import { WINDOW_HEIGHT } from '../../common/layout';
import Header from '../../components/Layout/Header';

export default function Root() {
  return (
    <div style={{ height: WINDOW_HEIGHT, overflowY: 'hidden' }}>
      <Header />
      <Outlet />
    </div>
  );
}
