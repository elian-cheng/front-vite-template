import Layout from 'pages/Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
import { Routes, Route, Navigate } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
      </Route>
      {/* <Route path="404" element={<ErrorPage />} /> */}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Router;
