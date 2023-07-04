import { Route, Routes } from 'react-router-dom';

import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import ProductPage from './pages/product-page/product-page';
import NotFound from './pages/not-found/not-found';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
