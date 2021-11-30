import {useState} from 'react';
import html2canvas from 'html2canvas';
import './App.css';




function App() {
  const[linea1, setLinea1]=useState();
  const[linea2, setLinea2]=useState();
  const[imagen1, setImagen2]=useState();

  
  
  const cambio=function(valor){setLinea1(valor.target.value)};
  const cambio2=function(valor){setLinea2(valor.target.value)};

  const cambioImagen=function(valor){setImagen2(valor.target.value)};


  //instalo npm install --save html2canvas para la libreria
  const tocoBoton = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
        var img= canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download= 'meme1.png';
        link.href=img;
        link.click();
        alert("iamgen guardada");
      });
  }
  return (
    <div className="App">
      <select onChange={cambioImagen}>
        <option value="meme1">meme1</option>
        <option value="meme2">meme2</option>
        <option value="meme3">meme3</option>
        <option value="meme4">meme4</option>
        <option value="meme5">meme5</option>
        <option value="meme6">meme6</option>
        <option value="meme7">meme7</option>
      </select>
      <br/>
      <input onChange={cambio} type="text" placehorlder="linea 1"/><br/>
      <input onChange={cambio2} type="text" placehorlder="linea 2"/><br/>
      <button onClick={tocoBoton}>Exportarr</button>


      <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src={"/img/"+imagen1+".jpg"}/>
      </div>
    </div>
  );
}

export default App;
