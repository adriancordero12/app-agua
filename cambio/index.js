const back = () =>{
    location.href = '../index.html';

}

const enter = () =>{

    location.href = '../factura/factura.html';

}

function keyboard(event) {
    let xd = event.code;
    document.getElementById("demo").innerHTML = xd;
    // console.log(xd);

    if(xd == "Enter"){
        location.href = '../factura/factura.html';
        
        // 'file:///Users/adriancordero/Documents/Proyectos/app-agua/factura.html';
    
    }
}