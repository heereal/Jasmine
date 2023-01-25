import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Map from '../pages/Map/Map';
import Root from '../pages/Root/Root';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/map/:bookstoreId" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
