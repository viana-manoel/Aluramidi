function tocasomPom(){
    documento.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//referencia variavel 
let contador = 0;

while ( contador < listaDeTeclas.lenght) {

    listaDeTeclas[contador]. onclick = tocasomPom;

    contador = contador + 1;

    console. log(contador);
}

