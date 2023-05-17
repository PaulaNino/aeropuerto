const express=require('express')

const app= express()
const path =require('path')
const hbs =require('hbs')

const puerto= 8182

app.use(express.static('public'))

//configuracion del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine','hbs')

//configuracion del directorio con archivos parcial
hbs.registerPartials(__dirname+'/public/views/partials') 

app.get('/', (req,res)=>{
   // res.write(home)
    //res.end()
    res.render('disponibilidad',
    {
        titulo:'disponibilidad', 
    })
}
)

app.listen(puerto, ()=>{
    console.log(`Escuchando el puerto ${puerto}`)
})




/*
// Obtener referencias a los elementos del formulario
const fecha1Input = document.querySelector('input[type="date"]');
const fecha2Input = document.querySelector('input[type="date"]');
const submitButton = document.querySelector('.submit-btn');

// Agregar un evento click al botón "Show flights"
submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  const fecha1 = new Date(fecha1Input.value);
  const fecha2 = new Date(fecha2Input.value);
  const fechaActual = new Date();

  // Validar si la fecha departing y la fecha returning son inferiores a la fecha actual
  if (fecha1 < fechaActual || fecha2 < fechaActual) {
    alert('Las fechas deben ser mayores o iguales a la fecha actual.');
  }
  // Validar si la fecha departing es mayor a la fecha returning
  else if (fecha1 > fecha2) {
    alert('La fecha de partida no puede ser mayor a la fecha de regreso.');
  }
  // Enviar el formulario si pasa las validaciones
  else {
    event.target.closest('form').submit();
  }
});

 */