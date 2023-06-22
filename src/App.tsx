import React from 'react';

import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Login from './features/Login/Login';
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import Home from './features/Home/Home';
import Cars from './features/cars/Cars';
import IndexPage  from './features/Index/IndexPage';
import DetailsCar from './features/cars/DetailsCar';
import Appartement from './features/Appartement/Appartement';
import DetailsAppartement from './features/Appartement/DetailsAppartement';
import Tour from './features/tour/Tour';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<IndexPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/cars' element={<Cars/>}/> 
      <Route path='/appartement' element={<Appartement/>}/>
      <Route path='/tour' element={<Tour/>}/>
      <Route path='/details-car/:id' element={<DetailsCar/>}/>
      <Route path='/detail-appartement/:id' element={<DetailsAppartement/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
