// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){

if (document.getElementById("amigo").value=="") {
        return alert("Por favor, inserta un nombre");
    } else {
        let nuevoAmigo = document.getElementById("amigo").value;
            amigos.push(nuevoAmigo);
            limpiarCaja();
        }
mostrarAmigos();
 }

 function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


function mostrarAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        const li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar el <li> a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear.";
        return;
    }

    // Generar índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indice];

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "Amigo secreto: " + amigoSorteado;
}

