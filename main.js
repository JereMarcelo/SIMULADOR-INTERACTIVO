
function saludo() {
  alert ("Bienvenido/a al Gimnasio de Entrenamiento los Mellis")
}
let acumulado = 0

let deporte = prompt("Ingrese un deporte");

function clasedeSpining() {
  if (deporte === "Spining") {
    let costodelaclase1 = 2500;
    console.log(
      "el costo de la clase de Spining es de " + costodelaclase1 + " por tres dias a la semana"
    );
  }
}

function fuerza() {
    if (deporte === "Musculacion") {
        let costodelaclase2 = 4000;
        console.log("el costo de la clase de Musculacion es de " + costodelaclase2 + " por seis dias a la semana"); 
        }
}

function funcionalTraining() {
  if (deporte === "Funcional Training") {
    let costodelaclase3 = 2500;
    console.log("el costo de la clase de Funcional Training es de " + costodelaclase3 + " por tres dias a la semana");
  }
}

saludo();
clasedeSpining();
fuerza();
funcionalTraining();