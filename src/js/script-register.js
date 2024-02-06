function logSubmit(event) {
  const data = {
    fullname: event.target['fullname'].value,
    email: event.target['email'].value,
    password: event.target['password'].value,
    document: event.target['document'].value,
    phone: event.target['phone'].value,
    address: {
      street: event.target['street'].value,
      number: event.target['number'].value,
      complement: event.target['complement'].value,
      neighborhood: event.target['neighborhood'].value,
      city: event.target['city'].value,
      state: "PE",
      postalCode: event.target['postalCode'].value
    }
  }
  fetch('http://localhost:3000/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(e => e.json()).then(console.log);
  event.preventDefault();
}

function changeRepeatPassword(event) {
  let fieldPassword = document.getElementById('password');
  let fieldRepeatPassword = document.getElementById('passwordRepeat');
  if (fieldPassword.value !== fieldRepeatPassword.value) {
    fieldPassword.style.borderColor = '#D77317';
    fieldRepeatPassword.style.borderColor = '#D77317';
    fieldPassword.style.borderWidth = '3px';
    fieldRepeatPassword.style.borderWidth = '3px';
    setTimeout(() => { 
      fieldPassword.style.borderColor = '#C6C6C6'; 
      fieldRepeatPassword.style.borderColor = '#C6C6C6'; 
      fieldPassword.style.borderWidth = '1px';
      fieldRepeatPassword.style.borderWidth = '1px';
    }, 3000);
  }
}