import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components.js/Counter';
import Home from './components.js/Home';
import Login from './components.js/Login';
import Navigation from './components.js/Navigation';
import ProductList from './components.js/ProductList';
import Register from './components.js/Register';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <Home />
      <Login />
      <Register /> */}
      {/* <Counter/> */}
      {/* <ProductList /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
    </Routes>
    </div >
  );
}

export default App;
