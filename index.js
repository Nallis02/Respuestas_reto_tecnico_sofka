/*Crear una función que reciba dos parámetros: cantidad y un arreglo de números.La función debera retornar un arreglo del tamaño definido en el parámetro cantidad con números aleatorios entre 1 y 100 que no se repitan y que no existan en el arreglo del segúndo parámetro.Agregue las validaciones que considere necesarias a los parámetros de entrada.*/

function noSeRepite(cantidad, arrayNumeros) {
  let array = [];
  while (array.length < cantidad) {
    const numeroAleatorio = Math.ceil(Math.random() * 100);
    if (
      !arrayNumeros.includes(numeroAleatorio) &&
      !array.includes(numeroAleatorio)
    ) {
      array.push(numeroAleatorio);
    }
  }
  return array;
}
console.log(noSeRepite(90, [17, 26, 27, 28, 41, 62, 67, 69, 73, 93]));

/*Crear una función que reciba 4 parámetros: nombre, cédula, teléfono y email. La función debe validar que el nombre esté compuesto por al menos tres palabras y que cada una empieza en mayúscula. La cédula debe ser mayor a 1000000000. El teléfono debe iniciar por 3 y debe tener una longitud de 10 dígitos. El email debe ser válido. La función retornará el resultado de la validación en formato JSON.*/
function validarNombres(nombres) {
  let nombresSeparados = nombres.split(" ");
  let validacion = true;
  nombresSeparados.forEach((nombre) => {
    if (nombre[0] !== nombre[0].toUpperCase()) {
      validacion = false;
    }
  });
  let validacion2 = nombresSeparados.length >= 3;
  return validacion && validacion2;
}
function validarTelefono(telefono) {
  const telefonoString = `${telefono}`;
  const validarNumeroTres = parseInt(telefonoString[0]) === 3;
  const validarCantidad = telefonoString.length === 10;
  return validarNumeroTres && validarCantidad;
}
function validarEmail(email) {
  const dividirEmail = email.split("@");
  const validarArroba = dividirEmail.length === 2;
  const dividirDominio = dividirEmail[1].split(".");
  const validarDominio = dividirDominio.length >= 2;
  return validarArroba && validarDominio;
}
function validarDatos(nombre, cedula, telefono, email) {
  return {
    nombres: validarNombres(nombre),
    cedula: parseInt(cedula) > 1000000000,
    telefono: validarTelefono(telefono),
    email: validarEmail(email),
  };
}
console.log(validarDatos("nallive Trujillo muñoz", 1024509, 3214072940, "nallive14@gmail.com")
);
console.log(validarDatos("Nallive Trujillo Muñoz", 1024509536, 214072940, "nallive14@gmai.lom.CO")
);
/*Crear una función que reciba dos parámetros: una fecha con componente de hora y un número con el ID del horario. La función deberá validar si dicha fecha está dentro de un horario establecido dentro de la función. Horario ID 1: Lunes a Viernes de 08:00 a 13:00 y 15:00 a 18:00. Horario ID 2: Lunes a Jueves 09:00 a 15:00 y Sábado de 08:00 a 12:00. Retorna 1 si está en horario y 0 si no lo está. */

// No logre terminar por tiempo.
function horario(fecha, id) {
    return fecha;
}
console.log(horario("2022-08-23 00:00:22", 1))

