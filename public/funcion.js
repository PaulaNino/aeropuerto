validarFormulario = () => {

  let departing = document.getElementById('departing').value
  let returning = document.getElementById('returning').value
  let fechaActual = new Date().toISOString().split('T')[0];;

  if (departing === null || departing === '' || departing.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Enter a departure date</span>';
      document.getElementById('errorDeparting').innerHTML = texto;
    }else if(departing < fechaActual){
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">The departure date cannot be earlier than the current date.</span>';
      document.getElementById('errorDeparting').innerHTML = texto;
    }else if(departing > returning){
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">The departure date cannot be later than the return date.</span>';
      document.getElementById('errorDeparting').innerHTML = texto;
      }else{
      document.getElementById('errorDeparting').innerHTML = '';
    }

    if (returning === null || returning === '' || returning.length === 0){
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Enter a return date</span>';
      document.getElementById('errorReturning').innerHTML = texto;
  }else if(returning < fechaActual){
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">The return date cannot be earlier than the current date.</span>';
      document.getElementById('errorReturning').innerHTML = texto;
  }else{
      document.getElementById('errorReturning').innerHTML = '';   
    }
  }
  


const boton = document.querySelector('#showFlights')

boton.addEventListener('click',validarFormulario)
