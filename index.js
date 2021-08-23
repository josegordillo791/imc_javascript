let ini=0;

let datos = [
       { 
        id: 0,
        peso: null,
        altura: null,
        imc:null
       }
    
];


function nuevo_imc() {
       let peso = document.getElementById("peso").value;
       let altura = document.getElementById("altura").value;
       let imc = peso / (altura * altura);
           imc = imc.toFixed(2);
        ini+=1;

        let nuevoimc = { 
          id: ini,
          peso: peso,
          altura: altura,
          imc:imc
       }

       

       datos.push(nuevoimc);
      
}

function MuestroporConsola(p1,p2) {
    nuevo_imc();
    
       // json.nuevaClave = "nuevoValor";
    console.log(datos);

}


