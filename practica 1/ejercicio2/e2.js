class nf{
    constructor(nombre, n1, n2, n3, n4, prom){
        this.nombre = nombre;
        this.n1= parseFloat(n1);
        this.n2= parseFloat(n2);
        this.n3= parseFloat(n3);
        this.n4= parseFloat(n4);
        this.prom = parseFloat(prom);
    }
    calcular(){
        let ppromedio = (this.n1 + this.n2 + this.n3 + this.n4)/4
        return ppromedio.toFixed(2)
    }
}
nombre = prompt('escriba el nombre del estudiante')
n1 = prompt('cual es la nota de matematica')
n2 = prompt('cual es la nota de lenguaje')
n3 = prompt('cual es la nota de ciencias')
n4 = prompt('cual es la nota de sociales')

const estudiante = new nf(nombre,n1,n2,n3,n4)
document.getElementById('nombre').innerText= estudiante.nombre
document.getElementById('n1').innerText= estudiante.n1
document.getElementById('n2').innerText= estudiante.n2
document.getElementById('n3').innerText= estudiante.n3
document.getElementById('n4').innerText= estudiante.n4
document.getElementById('prom').innerText= estudiante.calcular()