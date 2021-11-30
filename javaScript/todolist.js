window.onload= iniciar;


var tareas= []

function iniciar(){
    var btnAgregar= document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click",clickBtnAgregar);
}

function clickBtnAgregar(){
    var txtTarea=document.getElementById("btnTarea");
    var tarea= txtTarea.value;
    // alert(tarea);
    tareas.push(tarea);
    mostrarTareas();
}


function mostrarTareas(){
    var listado= document.getElementById("listado");
    var html="";
    debugger;
    for (var tarea of tareas){
        html+= tarea + "<br/>";
    }
    listado.innerHTML=html;
}