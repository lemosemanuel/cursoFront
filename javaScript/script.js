window.onload= iniciar;
function iniciar(){
    var btnCalcular=document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click",clickBtnCalcular);
}

function clickBtnCalcular(){
    var peso=document.getElementById("peso");
    var peso= peso.value;
    alert(peso);
    var altura=document.getElementById("altura");
    var altura= altura.value;
    alert(altura);
    
}