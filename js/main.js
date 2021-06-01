const CORREDORES = []
document.querySelector('#frm-ciclista').addEventListener('submit', e => {
  let nombre = document.querySelector('nombre_ciclista').value
  let carrera1 = document.querySelector('carrera_1_corredor').value
  let carrera2 = document.querySelector('carrera_2_corredor').value
  let carrera3 = document.querySelector('carrera_3_corredor').value
  let carrera4 = document.querySelector('carrera_4_corredor').value
  let carrera5 = document.querySelector('carrera_5_corredor').value
  const corredor = {
    nombre: nombre,
    carrera1: carrera1,
    carrera2: carrera2,
    carrera3: carrera3,
    carrera4: carrera4,
    carrera5: carrera5
  }

  CORREDORES.push(corredor)
  e.preventDefault()
})

console.log(corredor)
//if(CORREDORES instanceof 'Object')
console.log(CORREDORES.length)

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

CORREDORES.forEach(cor => console.log('El indice es : ', cor))

/*
const sumar = (x, y, z, p) => {
    console.log("La suma es : ", (x + y + z + p))
}

sumar(...CORREDORES)
*/
