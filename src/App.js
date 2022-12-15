import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Routes, Route, Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PRODUCTLIST_URL } from './constants';
import PersonList from './pages/PersonList';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={PRODUCTLIST_URL} element={<ProductList />} />
          <Route path="/" element={<PersonList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
