import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './Component/NavBar';
import { Home } from './Component/Home';
import { AddProduct } from './Component/AddProduct';
import {EditProduct} from"./Component/EditProduct";

function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="addProduct" element={<AddProduct/>}></Route>
        <Route path="editProduct/:id" element={<EditProduct/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
