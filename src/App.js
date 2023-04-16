import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import FossilList from './pages/FossilList/FossilList';
import HousewareList from './pages/HousewareList/HousewareList';
import ArtList from './pages/ArtList/ArtList';
import Navbar from './components/Navbar/Navbar';
import Filtres from './components/Filtres/Filtres';


function App() {
  
  return (
    <>
    

    <Navbar />
    <Filtres />

    <Routes>
      
      <Route path='/fossils' element={<FossilList />}/> 
      <Route path='/houseware' element={<HousewareList />}/>
      <Route path='/art' element={<ArtList />}/>
    </Routes>


    

    
    
    </>
  );
}


export default App;
