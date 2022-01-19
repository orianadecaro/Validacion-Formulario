//Abrir el archivo evaluacion7.html y guardarlo como evaluacion7_apellido.html (ej. evaluacion7_rodriguez.html)
//Desarrollar un formulario validado con las siguientes características:
///Al menos 3 campos.
//3 de esos campos deben ser obligatorios.
//Utilizar como mínimo 3 tipos de input distintos (por ejemplo: email, date, number).
//Un pattern.


function validar() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;





  if (nombre === "" || email === "" || mensaje === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }


  if (valido) {
    document.informacion.submit();
  } else if (elemento.validity.patternMismatch || elemento.validity.valueMissing) {
    alert('el nombre de usuario debe tener mínimo de 3 caracteres');
  }



}
