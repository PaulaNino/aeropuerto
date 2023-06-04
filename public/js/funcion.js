

function validateDates() {
  var departingDate = new Date(document.getElementById("departing").value);
  var returningDate = new Date(document.getElementById("returning").value);
  var currentDate = new Date();
  let errores = '';

  if (departingDate <= currentDate || returningDate <= currentDate) {
      errores += "Las fechas DEPARTING y RETURNING deben ser superiores a la fecha actual";
  }


  document.getElementById('error').textContent = errores;
}


function validateDates1() {
  var departingDate = new Date(document.getElementById("departing").value);
  var returningDate = new Date(document.getElementById("returning").value);
  var currentDate = new Date();
  let errores = '';


  if (departingDate > returningDate) {
      errores += "La fecha de DEPARTING no puede ser mayor a la fecha RETURNING";
  }

  document.getElementById('error1').textContent = errores;
}