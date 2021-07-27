//Fecha y Hora

let hoy = new Date();
let fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
let ho = hoy.getHours();
let m = hoy.getMinutes();
m = checkTime(m);

function checkTime(i) {
if (i < 10) {i = "0" + i}; 
return i;
}

let hora = ho + ":" + m;
let fechaYHora = fecha + ' ' + hora;
document.getElementById('fecha').innerHTML = fechaYHora;


function keyboard(event) {
    let teclado = event.code;
    document.getElementById("demo").innerHTML = teclado;
    // console.log(xd);

    if(teclado == "Enter"){
        // location.href = '../factura/factura.html';
        // 'file:///Users/adriancordero/Documents/Proyectos/app-agua/factura.html';

        let url = "file:///Users/adriancordero/Documents/Proyectos/app-agua/cambio/factura/factura.html"
        
        //let url = "../factura/factura.html";
        window.open(url, "Multiplataforma", "width=300, height=335");
    
    }
}




//Botones
const back = () =>{
    location.href = '../src/index.html';

}

const enter = () =>{

    // location.href = 'factura/factura.html';

    
     let url = "file:///Users/adriancordero/Documents/Proyectos/app-agua/cambio/factura/factura.html"
    
     //let url = "../factura/factura.html";
    window.open(url, "Multiplataforma", "width=300, height=335");

}
