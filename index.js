
//Hora 
// let hora = new Date();
// document.getElementById('hora').innerHTML = hora;



// Detectar teclado
function keyboard(event) {
    let teclado = event.code;
    let numeroInput = parseInt(teclado);
    document.getElementById("demo").innerHTML = teclado;
    console.log("Este es el teclado"+" "+teclado);
  console.log("Este es numero Input"+ " " + numeroInput)

}

  let getInput = () =>{
    let inputValue = document.getElementById("canti").value; 
    document.getElementById("inputt").innerHTML = inputValue; 
  
  

  // let validar = getElementById('obtener').value;
  // document.getElementById("fd").innerHTML = validar; 

  if(inputValue == Number){
    // console.log("Este es numero Input a "+ " " + numeroInput)

    let teclado = "Enter";
    let teclados = "Space"

    if(teclado = "Enter"){
      // location.href = 'factura/factura.html';
      // 'file:///Users/adriancordero/Documents/Proyectos/app-agua/factura.html';

      let url = "file:///Users/adriancordero/Documents/Proyectos/app-agua/factura/factura.html"

      window.open(url, "Diseño Web", "width=260, height=330")
  
  }

  }else{

    let error = "No es un numero"
    document.getElementById("error").innerHTML = error;

  }









  }



















    // if(teclados == "Space"){
    //   location.href = 'cambio/index.html';
      
      // 'file:///Users/adriancordero/Documents/Proyectos/app-agua/factura.html';
  
  // }



  // Final de la funcion para coger las letras
  // }

  // console.log(teclado)




  // Validacion de input 

  // let number = document.getElementById('canti')

  // number.addEventListener('keyup', (event) =>{
  //   let inputNumber = event.path[0].value;
  //   console.log(inputNumber)
  // });

  // number.addEventListener('keyup', function() { 
    // $('#inputt').text($(this).val()); 
    // console.log(number);
// }); 



  // let canti = document.getElementById('canti').value;
  // console.log(canti);

  // function cantidad(){

  //   let canti = document.getElementById('canti').value;

  //   let can = parseInt(canti);
  //   console.log(can);
  //   console.log(canti)
    // if(){
    //   console.log("Es numero "+ can)
    // }else{
    //   console.log("No es numero vv"+ canti)
    // }
  // }



//  function canti(){
//   let input = document.getElementById('canti').value;
//   document.getElementById("inputt").innerHTML = input;
//   console.log(input);

//  }
//  console.log(input);

// canti();

//////////////////////////////////////////////////////////////////////////////
// let getInput = () =>{
//   let inputValue = document.getElementById("canti").value; 
//   document.getElementById("inputt").innerHTML = inputValue; 

// }


// console.log("Hola2"+inputValue);









// validarInput.addEventListener('keypress', (event) => {
//     event.preventDefault()
//     console.log(event.keyCode)
//     let codigoKey = event.code
//     let valorKey = String.fromCharCode(codigoKey)
//     console.log(valorKey)

//     let valor = parseInt(valorKey)
//      console.log(valor)
//     if(valor) {
//       validarInput.value += valor
//     }
//   })

// const ho = "Hola reee";

// export let ho = "JHoo";

//Enter for print

const enter = () =>{

  // function factura(){
  //   let factura = new BrowserWindow({
  //       width: 1200,
  //       height: 800,
  //       webPreferences: {
  //            preload: path.join(__dirname, 'preload.js')
  //           // NodeIntegration: true
  //       }
  //   });

    // factura.loadFile('factura.html');

  // location.href = 'factura/factura.html'; 

// }

  // location.href = 'factura/factura.html'; 
  

};

const cambio = () =>{

  location.href = 'cambio/index.html';

}

// let app;


// app.whenReady().then(factura);

// app.on('window-all-closed', function(){
//     if(process.platform === 'darwin'){
//         app.quit();
//     }
// });

// app.on('activate', function(){
//     if(BrowserWindow.getAllWindows().length === 0){
//         factura();

//     }
// })







