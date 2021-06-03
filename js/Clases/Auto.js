
export default class Auto{
    color
    peso
    
    constructor(colorc, pesop, marca){
        this.color = colorc;
        this.peso = pesop;
        this.marca = marca
    } 
    
    acelerar(){
        console.log("El " + this.marca + " esta acelerando!!")
    }
}

//export default Auto