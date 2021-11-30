import './App.css';
// import PageWrapper from './pageWrapper';
// import Paginacion from './paginacion';
// import Peliculas from './peliculas';
// import peliculasJson from './peliculas.json';
// import {useState,useEffect} from 'react'
import ListadoPeliculas from './listadoPeliculas';
import Blog from './blog';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
export * from "react-router";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListadoPeliculas/>}></Route>
          <Route path='blog' element={<Blog/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
