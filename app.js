// Array para almacenar los nombres de amigos
let amigos = []; // Inicializa un array vacío donde se almacenarán los nombres de amigos.

// Capturar elementos del DOM 
const inputAmigo = document.getElementById('amigo'); // Obtiene el elemento del DOM con id 'amigo' (un campo de entrada).
const listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento del DOM con id 'listaAmigos'.
const resultado = document.getElementById("resultado"); // Obtiene el elemento del DOM con id 'resultado' (donde se mostrará el nombre de amigo sorteado).

// Función para agregar un amigo
function agregarAmigo() {
    const nombreAmigo = inputAmigo.value.trim(); // Obtiene el texto ingresado en el campo, eliminando espacios al inicio y al final.
   
    // Validar que el campo no esté vacío
    if (nombreAmigo === "") { // Verifica si el campo de entrada está vacío.
        alert("Por favor, inserte un nombre."); // Muestra una alerta si no hay texto ingresado.
        return; // Detiene la ejecución de la función.
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) { // Comprueba si el nombre ya existe en el array 'amigos'.
        alert(`El nombre ${nombreAmigo} ya está en la lista.`); // Muestra una alerta indicando que el nombre está duplicado.
        return; // Detiene la ejecución de la función.
    }

    // Añadir el nombre al array de amigos
    amigos.push(nombreAmigo); // Agrega el nombre del amigo al array 'amigos'.

    // Limpiar el campo de entrada
    inputAmigo.value = ""; // Borra el texto del campo de entrada para que quede vacío después de agregar el nombre del amigo al array

    // Actualizar la lista en el HTML
    actualizarLista(); // Llama a la función 'actualizarLista' para reflejar los cambios en la interfaz del sitio web.
}

// Función para actualizar la lista de amigos en la interfaz del sitio web
function actualizarLista() {

    // Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; // Borra cualquier contenido previo dentro del contenedor de la lista.

    // Recorrer el array amigos usando un bucle y se agrega cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) { // Itera sobre cada elemento en el array 'amigos'.
        const li = document.createElement("li"); // Crea un nuevo elemento <li> (elemento de lista).
        li.textContent = amigos[i]; // Asigna el texto del elemento <li> al nombre del amigo actual en el array.
        listaAmigos.appendChild(li); // Agrega el elemento <li> al contenedor de la lista en el DOM.
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles antes de sortear
    if (amigos.length === 0) { // Comprueba si el array 'amigos' está vacío.
        alert("No hay amigos disponibles para sortear. Porfavor,agrega al menos dos nombre de amigos para sortear."); // Muestra una alerta si no hay amigos en la lista.
        return; // Detiene la ejecución de la función.
    }

    // Generar un índice aleatorio
    const amigoSorteado = Math.floor(Math.random() * amigos.length); // Genera un número aleatorio entre 0 y la longitud del array menos 1.

    // Mostrar el amigo sorteado sen el HTML
    resultado.innerHTML = `El amigo sorteado es : ${amigos[amigoSorteado]}`; // Actualiza el contenido del elemento con el nombre sorteado.
}
