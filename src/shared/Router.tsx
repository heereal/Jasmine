import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Map from '../pages/Map/Map';
import Header from '../components/Layout/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map/:bookstoreId" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
