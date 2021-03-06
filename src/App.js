
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
