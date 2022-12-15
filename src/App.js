import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
