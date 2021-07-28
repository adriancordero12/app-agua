


var cantidad;
var precio;
var boton = document.getElementById('enter');

setTimeout(() => {
    noNull();
}, 1);

//Fecha y Hora
let hoy = new Date();
let fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
let ho = hoy.getHours();
let m = hoy.getMinutes();
m = checkTime(m);

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

let hora = ho + ":" + m;
let fechaYHora = fecha + ' ' + hora;
document.getElementById('fecha').innerHTML = fechaYHora;

boton.addEventListener("click", e => {
    e.preventDefault();
    enviar();

});

const noNull = () => {

    cantidad = document.getElementById("cantidad").value;
    precio = document.getElementById("precio").value;

    if (cantidad == "" || precio == "") {
        boton.disabled = true;
    } else {
        boton.disabled = false;

    }
};

const enviar = () => {

    localStorage.setItem("precio", precio);
    localStorage.setItem("cantidad", cantidad);

    //let url = "file:///Users/adriancordero/Documents/Proyectos/app-agua/cambio/factura/factura.html"
    let url = "factura/factura.html";
    window.open(url, "Multiplataforma", "width=300, height=335");

}
