
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './routes/ItemListContainer/ItemListContainer';
import Home from './routes/Home/Home';
import ItemDetailContainer from './routes/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ListMotos' element={<ItemListContainer saludo="es el list container" />}></Route>
        <Route path='/ListMotos/:id' element={<ItemDetailContainer />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
