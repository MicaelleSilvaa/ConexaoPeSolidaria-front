const CardRender = (src, title, description, href) => {
  const card = document.createElement('app-card');
  card.setAttribute('src', src);
  card.setAttribute('title', title);
  card.setAttribute('description', description);
  card.setAttribute('href', href);
  
  return card;
}

function loadAllEvent(id, limit) {
  fetch('https://conexao-pe-back-end.vercel.app/event').then(response => response.json()).then(data => {
    const eventsList = (limit === undefined)?Object.values(data).reverse() :Object.values(data).reverse().slice(0, limit)
    eventsList.forEach(event => {
      document.getElementById(id).appendChild(CardRender(event['picture'] || 'src/img/exemple-event-img.png',event['title'], event['description'], `./event.html?id=${event['id']}`));
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
