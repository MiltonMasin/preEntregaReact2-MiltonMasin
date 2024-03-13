 import './App.css';

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/IntemListContainer"; import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContaiiner';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


 function App() {

  return (
    <>
    <BrowserRouter>    
    <Navbar texto1="Cabello" texto2="Barba" texto3="Afeitado"/>
    <Routes>

      <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Barberia Don Jose"/>}></Route>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting="Prodcutos por categoria"/>}></Route>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
    
    </Routes>
    </BrowserRouter>

    
    
    </>   ) }
 export default App
