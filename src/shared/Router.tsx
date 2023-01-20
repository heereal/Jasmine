import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Map from "../pages/Map/Map";
import Layout from "../components/Layout/Layout";


const Router = () => {
  return (
    <BrowserRouter>
        <Layout />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/map/:bookstoreId" element={<Map />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;