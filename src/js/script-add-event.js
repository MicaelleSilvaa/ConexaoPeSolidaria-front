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

document.getElementById("cep").addEventListener("input", function (event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "");

  if (value.length > 5) {
    input.value = `${value.slice(0, 5)}-${value.slice(5, 8)}`;
  } else {
    input.value = value.slice(0, 5);
  }
});