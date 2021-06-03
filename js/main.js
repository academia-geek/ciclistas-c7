import {suma} from './Constantes.js'
import Auto from './Clases/Auto.js'
import Ciclista from './Clases/Corredor.js'
const CORREDORES = [
  new Ciclista("Carlos Perez", 50, 40, 80, 20, 10)
]
let modalAdicionarCiclistaEl = document.querySelector('#modalAdicionarCiclista')
var modal = bootstrap.Modal.getInstance(modalAdicionarCiclistaEl)

modalAdicionarCiclistaEl.addEventListener('show.bs.modal', e => {
  document.querySelector('#frm-ciclista').reset()
  modal = modal ? modal : bootstrap.Modal.getInstance(modalAdicionarCiclistaEl)
})

document.querySelector('#frm-ciclista').addEventListener('submit', e => {
  e.preventDefault()
  const corredor = new Ciclista()
  corredor.nombre = document.querySelector('#nombre_ciclista').value
  corredor.carrera1 = parseFloat(document.querySelector('#carrera_1_corredor').value)
  corredor.carrera2 = parseFloat(document.querySelector('#carrera_2_corredor').value)
  corredor.carrera3 = parseFloat(document.querySelector('#carrera_3_corredor').value)
  corredor.carrera4 = parseFloat(document.querySelector('#carrera_4_corredor').value)
  corredor.carrera5 = parseFloat(document.querySelector('#carrera_5_corredor').value)
  //CORREDORES.push(corredor)
  CORREDORES.unshift(corredor)
  pintarTablaCorredores(CORREDORES)
  modal.toggle()
  let myAlert =document.getElementById('liveToast');//select id of toast
  let bsAlert = new bootstrap.Toast(myAlert);//inizialize it
  bsAlert.show();//show it
})
document.querySelector("#ordenar-carrera-1").addEventListener('click', e => {
  CORREDORES.sort((c1, c2) => c1.carrera1 - c2.carrera1)
  pintarTablaCorredores(CORREDORES)
})

document.querySelector("#txt-buscar-ciclistas").addEventListener('keyup', e => {
  const corredoresFiltrados = CORREDORES.filter(corredor => {
    return corredor.nombre.toLowerCase().includes(e.target.value.toLowerCase())
  })
  pintarTablaCorredores(corredoresFiltrados)
} )


const pintarTablaCorredores = (arreglo) => {
  let HTML = ""
  
  arreglo.forEach((corredor, i) => {
    HTML +=  `<tr>
                  <td>${(i + 1)}</td>
                  <td>${corredor.nombre}</td>
                  <td>${corredor.carrera1}</td>
                  <td>${corredor.carrera2}</td>
                  <td>${corredor.carrera3}</td>
                  <td>${corredor.carrera4}</td>
                  <td>${corredor.carrera5}</td>
                  <td><a class = "btn btn-link">Ver</a></td>
              </tr>`;
  })
  
  document.querySelector("#tbl-ciclistas tbody").innerHTML = HTML
  
}

//console.log(corredor)
//if(CORREDORES instanceof 'Object')
//console.log(CORREDORES.length)

/*
for (let i = 0; i < CORREDORES.length; i++) {
    console.log(CORREDORES[i])
} 

let i = 0
while(i < CORREDORES.length) {
    console.log(CORREDORES[i])
    i =  i + 1
}

for (i in CORREDORES) {
  console.log(CORREDORES[i])
}


for(cor of CORREDORES){
    console.log(cor)
}*/

//CORREDORES.forEach(cor => console.log('El indice es : ', cor))

/*
const sumar = (x, y, z, p) => {
    console.log("La suma es : ", (x + y + z + p))
}

sumar(...CORREDORES)
*/

let toyota = new Auto("rojo" , "840 kg", "Toyota")
let mercedes = new Auto("azul", "1500 kg",  "Mercedes")

mercedes.acelerar()

console.log(toyota)
console.log(mercedes)


pintarTablaCorredores(CORREDORES)