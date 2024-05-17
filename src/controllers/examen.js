export default function examen(valor) {
  let mensaje;
  let resultado = 0;

  // Primer if-else
  if (valor > 10) {
      // If-else dentro del if
      if (valor % 2 === 0) {
          mensaje = "El valor es mayor que 10 y es par.";
      } else {
          mensaje = "El valor es mayor que 10 y es impar.";
      }
  } else {
      mensaje = "El valor es 10 o menor.";
  }

  // Variable para contar
  let contador = 0;

  // Ciclo while
  while (contador < valor) {
      resultado += contador;
      contador++;
  }

  return { mensaje: mensaje, resultado: resultado };
}
