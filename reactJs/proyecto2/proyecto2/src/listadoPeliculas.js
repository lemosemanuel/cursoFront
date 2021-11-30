import './App.css';
import PageWrapper from './pageWrapper';
import Paginacion from './paginacion';
import Peliculas from './peliculas';
import peliculasJson from './peliculas.json';
import {useState,useEffect} from 'react'


function ListadoPeliculas() {


  const [paginaActual, setPaginaActual]=useState(1);
  let peliculas1 = peliculasJson
  const [peliculas,setPeliculas]=useState([]);

  useEffect(()=>{
    buscarPeliculas();
  },[]);

  
  const buscarPeliculas= async()=>{
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';
    let respuesta = await fetch(url,{
      "method" : 'GET',
      "mode":"no-cors",
      "headers": {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Origin':'https://lucasmoy.dev'
      }
    }).then(respuesta=>respuesta.json())
    setPeliculas(respuesta);
  }
  
  
  const getTotalPeliculas=()=>{
    let totalPeliculas = Math.ceil((peliculasJson.length)/5);
    return totalPeliculas;
    
  }

  let peliculasPorPagina= peliculas1.slice((paginaActual-1)*5, paginaActual*5)
  

  return (
    <PageWrapper>
      {peliculasPorPagina.map(dato =>{
        return <Peliculas titulo={dato.titulo} calificacion={dato.calificacion} fecha={dato.fecha} director={dato.director} actores={dato.actores}/>
        })}
    
    <Paginacion pagina={paginaActual} total={getTotalPeliculas()} onChange={(i)=>{
      setPaginaActual(i)}}/>
    </PageWrapper>
  );
}

export default ListadoPeliculas;
