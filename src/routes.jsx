import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Article from './page/Article';

const Rota = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/article" element={<Article />} />
      <Route index element={<Main />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Rota;
