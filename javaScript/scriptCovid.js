window.onload=iniciar;

function iniciar(){
    let boton= document.getElementById('btnCargar');
    boton.addEventListener('click',clickenBoton);
}

async function peticion(url){
    let respuesta= await fetch(url);
    return respuesta.json();
}
async function clickenBoton(){

    let pais = document.getElementById('selectPais').value;
    let fecha = document.getElementById('inputFecha').value;

    let json= await peticion(`https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`);
    console.log(json);
    let estadisticas =json.dates[fecha  ].countries[pais];
    console.log(estadisticas);
    document.getElementById('today_confirmed').innerHTML=estadisticas.today_confirmed;
}

// today_confirmed: 235290

// today_deaths: 28678

// today_hospitalised_patients_with_symptoms: 0

// today_intensive_care: 11454

// today_new_confirmed: 466

// today_new_deaths: 50

// today_new_hospitalised_patients_with_symptoms: 0

// today_new_intensive_care: 20

// today_new_open_cases: -381

// today_new_recovered: 797

// today_new_total_hospitalised_patients: 140