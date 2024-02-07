const CardRender = (src, title, description, callback) => {
  const img = document.createElement('img');
  img.src = src;
  
  const _title = document.createElement('h2');
  _title.innerText = title;
  
  const _description = document.createElement('p');
  _description.innerText = description;

  const _button = document.createElement('button');
  _button.innerText = "Seja voluntário";
  _button.addEventListener('click', callback);
  
  const cardEvent = document.createElement('div')
  cardEvent.className = 'card-event'
  
  cardEvent.appendChild(img)
  cardEvent.appendChild(_title)
  cardEvent.appendChild(_description)
  cardEvent.appendChild(_button)
  
  return cardEvent;
}

function loadAllEvent() {
  fetch('https://conexao-pe-back-end.vercel.app/event').then(response => response.json()).then(data => {
    Object.values(data).forEach(event => {
      document.getElementById("block-events").appendChild(CardRender(event['picture'] || 'src/img/exemple-event-img.png',event['title'], event['description'], () => window.location.href = `./event.html?id=${event['id']}`));
    });
  })
}

function loadSingleEvent() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if(id !== null){
    getSingleEvent(id);
  }else{
    window.location.href = 'all-events.html';
  }
}

function getSingleEvent(id) {

  fetch(`https://conexao-pe-back-end.vercel.app/event/${id}`).then(response => response.json()).then(event => {
    document.getElementById("picture").src = event['picture'];
    document.getElementById("title").innerText = event['title'];
    document.getElementById("description").innerText = event['description'];
    
    const date = new Date(event['date']);

    document.getElementById("date").innerText = `${date.toLocaleDateString('pt-BR')} ás ${date.toLocaleTimeString('pt-BR')}`;

    const address = event['address'];

    document.getElementById('address').innerText = `${address['street']} Nº ${address['number']} - ${address['neighborhood']}, ${address['city']} - ${address['state']}, ${address['postalCode']}`;

  });
}
