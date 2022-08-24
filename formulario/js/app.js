window.addEventListener("load", () => {
  const formulario = document.querySelector("#formulario");
  const nombre = document.getElementById("nombre");
  const cedula = document.getElementById("cedula");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const operacion = document.getElementById("operacion");
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    validaCampos();
    consultarApi(operacion.value);
  });

  const validaCampos = () => {
    //capturar los valores ingresados por el usuario
    const nombreValor = nombre.value.trim();
    const cedulaValor = cedula.value.trim();
    const emailValor = email.value.trim();
    const telefonoValor = telefono.value.trim();
    const operacionValor = operacion.value.trim();
    //validando campo nombre
    if (!nombreValor) {
      validaFalla(nombre, "Campo vacío");
    } else if (!validarNombres(nombreValor)) {
      validaFalla(
        nombre,
        "El nombre debe tener minimo 3 palabras y deben iniciar en mayudcula."
      );
    } else {
      validaOk(nombre);
    }
    //validando campo cedula
    if (!cedulaValor) {
      validaFalla(cedula, "Campo vacío");
    } else if (!validarCedula(cedulaValor)) {
      validaFalla(cedula, "La cedula debe tener 10 caracteres cómo mínimo.");
    } else {
      validaOk(cedula);
    }
    //validando campo email
    if (!emailValor) {
      validaFalla(email, "Campo vacío");
    } else if (!validarEmail(emailValor)) {
      validaFalla(email, "El e-mail no es válido");
    } else {
      validaOk(email);
    }

    //validando campo telefono
    if (!telefonoValor) {
      validaFalla(telefono, "Campo vacío");
    } else if (!validarTelefono(telefonoValor)) {
      validaFalla(
        telefono,
        "telefono erroneo, debes ingresar un numero que inicie con 3 y debe ser de 10 digitos"
      );
    } else {
      validaOk(telefono);
    }
    //validar campo operacion
    if (!operacionValor) {
      validaFalla(operacion, "Rellene este campo");
    } else {
      validaOk(operacion);
      consultarApi(operacion.value);
    }
  };

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
  function validarCedula(cedula) {
    let cedulaIn = parseInt(cedula) > 1000000000;
    return cedulaIn;
  }
  function validarEmail(email) {
    const dividirEmail = email.split("@");
    const validarArroba = dividirEmail.length === 2;
    const dividirDominio = dividirEmail[1].split(".");
    const validarDominio = dividirDominio.length >= 2;
    return validarArroba && validarDominio;
  }

  function validarTelefono(telefono) {
    const telefonoString = `${telefono}`;
    const validarNumeroTres = parseInt(telefonoString[0]) === 3;
    const validarCantidad = telefonoString.length === 10;
    return validarNumeroTres && validarCantidad;
  }
});

const validaFalla = (input, msje) => {
  const formControl = input.parentElement;
  const aviso = formControl.querySelector("p");
  aviso.innerText = msje;

  formControl.className = "form-control falla";
};
const validaOk = (input, msje) => {
  const formControl = input.parentElement;
  formControl.className = "form-control ok";
};

//consultar api
const consultarApi = (operacion) => {
  fetch(`http://api.mathjs.org/v4/?expr=${operacion}`)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      const resultado = document.querySelector("#resultado");
      resultado.innerHTML = `<h2> ${data} </h2>`;
    });
};
