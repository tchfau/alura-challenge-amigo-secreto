// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crea el array para almacenar los nombres, declara e inicializa variables globales
let amigos = [];
let amigoSorteado = "";
let elementoAmigo = document.getElementById('amigo');
let elementoListaAmigos = document.getElementById('listaAmigos');
let elementoListaResultados = document.getElementById('resultado'); 

// Implementa una función para agregar amigos
function agregarAmigo() {
    const amigo = elementoAmigo.value;

    if (amigo === "") {
        alert("Por favor, inserte un nombre");
    }

    if (amigo && !amigos.includes(amigo)) {
        amigos.push(amigo);
        actualizarListaAmigos(amigos);
    }
    
    elementoAmigo.value = "";
    console.log(amigos);
}

// Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos(amigos) {
    let nuevoElementoLi = document.createElement('li');
    for (let i = 0; i < amigos.length; i++) {
        nuevoElementoLi.innerText = amigos[i];
        console.log(amigos[i]);
    }
    console.log(nuevoElementoLi);
    elementoListaAmigos.append(nuevoElementoLi);
}

// Implementa una función para sortear los amigos
function sortearAmigo() {
    let indiceSorteado;
    while (amigos.length == 0) {
        alert("No hay amigos ingresados");
        break;
    }

    for (let i = 0; i < amigos.length; i++) {
        indiceSorteado = Math.floor(Math.random() * (i +1));
    }

    for (let i = 0; i < amigos.length; i++) {
        if (i == indiceSorteado) {
            amigoSorteado = amigos[i];
        }
    }

    mostrarResultados(amigoSorteado);
}

// Implementa una función para mostrar los resultados
function mostrarResultados(amigoSorteado) {
    lista.innerHTML = "";
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}