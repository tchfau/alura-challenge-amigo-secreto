// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crea el array para almacenar los nombres, declara e inicializa variables globales
let amigos = [];
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