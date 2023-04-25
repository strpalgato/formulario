// Se obtiene el formulario y el botón "Crear Carta" del HTML
const formulario = document.forms["formulario"];
const btnCrearCarta = document.getElementById("crear-carta");
formulario.addEventListener("submit", validarFormulario);
btnCrearCarta.addEventListener("click", generarCarta);

// Se agrega un listener al formulario para que al enviarlo se llame a la función 
function validarFormulario(event) {
  // Se previene que se envíe el formulario por defecto
  event.preventDefault();
  // Se agrega un listener al botón "Crear Carta" para que al hacer clic se llame a la función 
  // Se obtienen los valores ingresados en los campos del formulario
  const rut = formulario["rut"].value;
  const nombre = formulario["nombre"].value;
  const apellido_paterno = formulario["apellido_paterno"].value;
  const apellido_materno = formulario["apellido_materno"].value;
  const fecha_nacimiento = formulario["fecha_nacimiento"].value;
  const edad = formulario["edad"].value;
  const genero = formulario["genero"].value;
  const email = formulario["email"].value;
  const celular = formulario["celular"].value;
  const profesion = formulario["profesion"].value;
  const motivacion = formulario["motivacion"].value;

  // Se validan los campos del formulario y si alguno no cumple con los requisitos se muestra una alerta y se retorna false
  if (rut.length < 9 || rut.length > 10) {
    alert("El RUT debe tener entre 9 y 10 caracteres.");
    return false;
  }
  if (nombre.length < 3 || nombre.length > 20) {
    alert("El nombre debe tener entre 3 y 20 caracteres.");
    return false;
  }
  if (apellido_paterno.length < 3 || apellido_paterno.length > 20) {
    alert("El apellido paterno debe tener entre 3 y 20 caracteres.");
    return false;
  }
  if (apellido_materno.length < 3 || apellido_materno.length > 20) {
    alert("El apellido materno debe tener entre 3 y 20 caracteres.");
    return false;
  }
  if (fecha_nacimiento === "") {
    alert("Debe seleccionar su fecha de nacimiento");
    return false;
  }
  if (edad < 18 || edad > 35) {
    alert("La edad debe estar entre 18 y 35 años.");
    return false;
  }
  if (genero === "") {
    alert("Debe seleccionar un género.");
    return false;
  }
  if (celular.length < 9 || celular.length > 12) {
    alert("El celular debe tener entre 9 y 12 caracteres.");
    return false;
  }
  if (email === "") {
    alert("Debe ingresar su correo electrónico.");
    return false;
  }
  if (profesion === "") {
    alert("Debe ingresar su profesión.");
    return false;
  }
  if (motivacion === "") {
    alert("Debe ingresar su motivación para postular al trabajo.");
    return false;
  }
  alert("El formulario ha sido enviado correctamente."); 
  return true;
}

// Funciones encargadas de generar la carta con los datos ingresados en el formulario
function generarCarta() {
  const nombre = formulario["nombre"].value;
  const apellido_paterno = formulario["apellido_paterno"].value;
  const apellido_materno = formulario["apellido_materno"].value;
  const edad = formulario["edad"].value;
  const profesion = formulario["profesion"].value;
  const motivacion = formulario["motivacion"].value;

  const saludo = generarSaludo(nombre, apellido_paterno, apellido_materno, edad, profesion);
  const cuerpo = generarCuerpo(motivacion);
  const despedida = "Saludos cordiales.";

  const carta = saludo + "\n\n" + cuerpo + "\n\n" + despedida;
  document.getElementById("carta").value = carta;
}

function generarSaludo(nombre, apellido_paterno, apellido_materno, edad, profesion) {
  const saludo = `Estimado/a señor/a: \n\nMi nombre es ${nombre} ${apellido_paterno} ${apellido_materno}, tengo ${edad} años y mi profesión es ${profesion}.`;
  return saludo;
}

function generarCuerpo(motivacion) {
  const cuerpo =
    "Me dirijo a usted con el fin de expresar mi interés en la vacante de apoyo ambiental que se encuenta disponible en su empresa. " +
    motivacion + 
    ", como puede apreciar en mi curriculum vitae adjunto. Cuento con la formación y experiencia necesarias para desempeñar las funciones de este cargo, y estoy seguro/a de que podré contribuir significativamente al crecimiento y desarrollo de la empresa.";
  return cuerpo;
}