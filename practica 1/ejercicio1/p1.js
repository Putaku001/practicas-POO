class presentacion{
    constructor(nombre,edad,departamento,telefono){
        this.nombre = nombre;
        this.edad = edad;
        this.departamento = departamento;
        this.telefono = telefono;
    }
    info(){
        return `${this.nombre}, ${this.edad}, ${this.departamento}, ${this.telefono}`
    }
}
nombre = prompt('cual es tu nombre')
edad = prompt('cual es tu edad')
departamento = prompt('de donde sos')
telefono = prompt('cual es tu numero de telefono')

const sho = new presentacion(nombre, edad, departamento, telefono)
document.getElementById('nombre').innerText = sho.nombre
document.getElementById('edad').innerText = sho.edad
document.getElementById('departamento').innerText = sho.departamento
document.getElementById('telefono').innerText = sho.telefono