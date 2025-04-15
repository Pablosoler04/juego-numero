let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const intentos = document.querySelector(".intentos");
const ultimoResultado = document.querySelector(".ultimoResultado");
const pista = document.querySelector(".pista");
const contadorTexto = document.querySelector(".contador");

const enviarAdivinanza = document.querySelector(".enviarAdivinanza");
const campoAdivinar = document.querySelector(".campoAdivinar");

let contadorIntentos = 1;
let botonReinicio;

function verificarAdivinanza() {
  let intentoUsuario = Number(campoAdivinar.value);

  if (contadorIntentos === 1) {
    intentos.textContent = "Intentos anteriores: ";
  }
  intentos.textContent += intentoUsuario + " ";

  contadorTexto.textContent = `Intento ${contadorIntentos} de 10`;

  if (intentoUsuario === numeroAleatorio) {
    ultimoResultado.textContent = `¡Felicidades! ¡Lo adivinaste en ${contadorIntentos} intento${contadorIntentos > 1 ? 's' : ''}!`;
    ultimoResultado.style.backgroundColor = "green";
    pista.textContent = "";
    finDelJuego();
  } else if (contadorIntentos === 10) {
    ultimoResultado.textContent = "¡¡¡Fin del juego!!!";
    pista.textContent = `El número era ${numeroAleatorio}.`;
    finDelJuego();
  } else {
    ultimoResultado.textContent = "¡Incorrecto!";
    ultimoResultado.style.backgroundColor = "red";
    if (intentoUsuario < numeroAleatorio) {
      pista.textContent = "¡El número es muy bajo!";
    } else if (intentoUsuario > numeroAleatorio) {
      pista.textContent = "¡El número es muy grande!";
    }
  }

  contadorIntentos++;
  campoAdivinar.value = "";
  campoAdivinar.focus();
}

enviarAdivinanza.addEventListener("click", verificarAdivinanza);

function finDelJuego() {
  campoAdivinar.disabled = true;
  enviarAdivinanza.disabled = true;
  botonReinicio = document.createElement("button");
  botonReinicio.textContent = "Iniciar nuevo juego";
  document.body.append(botonReinicio);
  botonReinicio.addEventListener("click", reiniciarJuego);
}

function reiniciarJuego() {
  contadorIntentos = 1;

  const parrafosReinicio = document.querySelectorAll(".resultados p");
  for (let i = 0; i < parrafosReinicio.length; i++) {
    parrafosReinicio[i].textContent = "";
  }

  botonReinicio.parentNode.removeChild(botonReinicio);

  campoAdivinar.disabled = false;
  enviarAdivinanza.disabled = false;
  campoAdivinar.value = "";
  campoAdivinar.focus();

  ultimoResultado.style.backgroundColor = "white";

  contadorTexto.textContent = "Intento 1 de 10";
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

