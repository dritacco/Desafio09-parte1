// 1- creo la clase libro
class Libro {
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    mostrarDatosEnConsola() {
        console.log(`${this.titulo}, de ${this.autor.toUpperCase()}`);

    };

    mostrarDatosEnAlert() {
        alert(`${this.titulo}, de ${this.autor.toUpperCase()}`);
    };

    getTitulo() {
        return this.titulo;
    };

    mostrarDatos(valor) {

        if (valor ==='alert') {
            alert(`${this.titulo}, de ${this.autor.toUpperCase()}`);
        }
        else if (valor === 'console') {
            console.log(`${this.titulo}, de ${this.autor.toUpperCase()}`);
        }
        
    };

}

//2- Imprimo en el log la variable unLibro
let unLibro = new Libro('Ángeles y Demonios','Dan Brown');
console.log(unLibro);

//3- Imprimo en el log la el titulo y autor
unLibro.mostrarDatosEnConsola();

//4- Alerto lo mismo que con la funcion mostrarDatosEnConsola
unLibro.mostrarDatosEnAlert();

//5- agrego el metodo get para el titulo

let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();

alert(tituloDelNuevoLibro);

//6- Agrego metodo para mostrar datos segun parametro.

nuevolibro.mostrarDatos('alert');
nuevolibro.mostrarDatos('console');
nuevolibro.mostrarDatos('');