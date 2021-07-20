//Hora 
// let hora = new Date();
// document.getElementById('hora').innerHTML = hora;


// Detectar teclado
function keyboard(event) {
    let xd = event.code;
    document.getElementById("demo").innerHTML = xd;
    console.log(xd);

    if(xd == "Enter"){
        location.href = 'factura/factura.html';
        
        // 'file:///Users/adriancordero/Documents/Proyectos/app-agua/factura.html';
    
    }
    if(xd == "Space"){
      location.href = 'cambio/index.html';
      
      // 'file:///Users/adriancordero/Documents/Proyectos/app-agua/factura.html';
  
  }
  }

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


let getInput = () =>{
  let inputValue = document.getElementById("canti").value; 
  document.getElementById("inputt").innerHTML = inputValue; 

 console.log(inputValue)
}










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

  location.href = 'factura/factura.html';
  

}

const cambio = () =>{

  location.href = 'cambio/index.html';

}









