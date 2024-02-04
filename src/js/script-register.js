let btnFisico = document.getElementById('btn-fisico');

let formFisico = document.getElementById('form-fisico');

document.getElementById("telefone").addEventListener("input", function (event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "");

  if (value.length > 10) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
      7,
      11
    )}`;
  } else {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
      6,
      10
    )}`;
  }
});

document.getElementById("celular").addEventListener("input", function (event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "");

  if (value.length > 10) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
      7,
      11
    )}`;
  } else {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
      6,
      10
    )}`;
  }
});

document.getElementById('cpf').addEventListener('input', function(event) {
      let input = event.target;
      let value = input.value.replace(/\D/g, ''); 

      if (value.length > 9) {
      
        input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
      } else if (value.length > 6) {
        
        input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}`;
      } else if (value.length > 3) {
        
        input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}`;
      } else {
       
        input.value = value.slice(0, 3);
      }
    });