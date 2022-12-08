
import './App.css';
import { BrowserRouter, routes, route, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './routes/ItemListContainer/ItemListContainer';
import Home from './routes/Home/Home';
import ItemDetailContainer from './routes/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ListMotos' element={<ItemListContainer saludo="es el list container" />}></Route>
        <Route path='/ListMotos/:id' element={<ItemDetailContainer />}></Route>
      </Routes>
      {/* <ItemListContainer saludo="hola nuevamente"></ItemListContainer>
      <ItemDetailContainer /> */}
    </BrowserRouter>
  )
}

export default App;
