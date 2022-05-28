
let grande = 0
let mediano = 0
let chico = 0

let ingreso = prompt(
  "tu tamaño es grande medio o chico? suficiente para salir"
);

while (ingreso != "suficiente") {
  ingreso.toLowerCase;
  switch (ingreso) {
    case "grande":
      alert("tomamos nota de tu tamaño");
      grande = grande +1
      ingreso = prompt(
        "tu tamaño es grande medio o chico? \n suficiente para salir"
      );
      break

    case "mediano":
      alert("tomamos nota de tu tamaño");
      mediano = mediano +1
      ingreso = prompt(
        "tu tamaño es grande medio o chico? \n suficiente para salir"
      );
      break

    case "chico":
      alert("tomamos nota de tu tamaño");
      chico = chico +1
      ingreso = prompt(
        "tu tamaño es grande medio o chico? \n suficiente para salir"
      );
      break

    default:
    
      break;
  }
}

console.log ("fuiste grande", grande,"veces") 
console.log ("fuiste mediano", mediano,"veces")
console.log ("fuiste chico", chico, "veces")

