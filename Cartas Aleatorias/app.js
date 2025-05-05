//Aca defino los array de los palos y las images de cada uno
const palos = ["Picas", "Corazones", "Tréboles", "Diamantes"];
const imagenesPalos = {
    "Picas": "picas.png",
    "Corazones": "corazones.png",
    "Tréboles": "trebol.png",
    "Diamantes": "diamantes.png"
};

// Aca Defino los valores de las cartas o posibles valores
const valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

//Aca al float lo dejo en entero por y le dejo un random
const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
const imagenPalo = imagenesPalos[paloAleatorio];
const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

// Aca en el DIV de valrCentral meto los valores aleatorios que vienen de valores
document.getElementById("valorCentral").textContent = valorAleatorio;

// Crear imagen para las esquinas
function crearImagenPalo() {
    const imagen = document.createElement("img");
    imagen.src = imagenPalo;
    imagen.classList.add("palo-imagen");
    return imagen;
}

// Insertar imágenes en las esquinas
const esquinaSuperior = document.getElementById("palo-superior");
const esquinaInferior = document.getElementById("palo-inferior");

esquinaSuperior.textContent = "";
esquinaSuperior.appendChild(crearImagenPalo());

esquinaInferior.textContent = "";
esquinaInferior.appendChild(crearImagenPalo());