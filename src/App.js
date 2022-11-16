import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
import ProductDetails from './pages/ProductDetails.js';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product/:id' element={<ProductDetails />}></Route>
    </Routes>
  );
}

export default App;
