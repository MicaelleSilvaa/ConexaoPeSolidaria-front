const endpoint = 'https://conexao-pe-back-end.vercel.app';

function handleLogin(event) {
  const data = {
    'email': event.target['email'].value,
    'password': event.target['password'].value
  }
  const btLogin = document.getElementById("button_login");
  btLogin.innerHTML = "<app-loading/>";
  fetch(`${endpoint}/auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(async response => {
    return { status: response.status, body: await response.json() }
  }).then(data => {
    console.log(data)
    switch (data.status) {
      case 400:
        animationFields({'_message': Object.values(data['body']['_message']).map(msg => { return { 'msg': msg, 'type': 'error' } })});
        break;
      case 401:
        animationFields({'_message':  { 'msg': data['body']['_message'], 'type': 'error' } });
        break
      default:
        break;
    }
    (data['body']['access_token'] !== undefined) ? createToken(data['body']['access_token']) : animationFields({ 'msg': data['_message'], 'type': 'error' });
  }).finally(() => {
    loginChecked();
    btLogin.innerHTML = "Login";
  });
  event.preventDefault();

}

function animationFields(data) {
  const fieldContainer = document.getElementById("input-content");
  fieldContainer.classList.add("alertAnime");
  setTimeout(() => {
    fieldContainer.classList.remove("alertAnime");
  }, 800);

  createNotification(data);
}

function isLoggad() {
  return readToken() !== null;
}

function readToken() {
  var token = "token=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(token) == 0) {
      return c.substring(token.length, c.length);
    }
  }
  return null;
}

function createToken(token) {
  document.cookie = `token=${token}; expires=3600000; path=/`;
}

function loginChecked() {
  window.location.href.includes('add-event.html')
  if (isLoggad()) {
    if (!window.location.href.includes('add-event.html'))
      window.location.href = './add-event.html'
  } else {
    if (!window.location.href.includes('login.html'))
      window.location.href = './login.html'
  }
}

function handleCreate(event) {
  const data = {
    'title': event.target['title'].value,
    'description': event.target['description'].value,
    'contact': event.target['contact'].value,
    'picture': event.target['picture'].value,
    'date': event.target['date'].value,
    'address': {
      'street': event.target['street'].value,
      'number': Number(event.target['number'].value),
      'complement': event.target['complement'].value,
      'neighborhood': event.target['neighborhood'].value,
      'city': event.target['city'].value,
      'state': 'PE',
      'postalCode': event.target['postalCode'].value
    }
  }
  fetch(`${endpoint}/event`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${readToken()}`
    },
    body: JSON.stringify(data),
  }).then(async response => {
    return { status: response.status, body: await response.json() }
  }).then(data => {
    console.log(data)
    var notificationsMessages = { '_message': [] };
    switch (data.status) {
      case 200:
        notificationsMessages['_message'].push({ 'msg': [`Evento criado com sucesso.`], 'type': 'success' });
        break;
      case 401:
        logout();
        break;
        default:
          notificationsMessages['_message'] = Object.values(data['body']['_message']).map(msg => { return { 'msg': msg, 'type': 'error' } });
          break;
        }
        createNotification(notificationsMessages);
        if (data.status === 200){
          setTimeout(() => window.location.href = `/all-events.html`, 4500);
        }
      });
      event.preventDefault();
    }
    
    function createNotification(data) {
      const notification = document.getElementById("notification");
      Object.values(data['_message']).forEach(alert => {
        alert['msg'].forEach(value => {
          let alertComponent = document.createElement('app-alert');
          alertComponent.setAttribute('value', value);
          alertComponent.setAttribute('type', alert['type']);
          notification.appendChild(alertComponent);
          setTimeout(() => notification.removeChild(alertComponent), 4900);
        });
      });
    }
    
    function logout() {
      document.cookie = "";
      window.location.href = `/login.html`
    }