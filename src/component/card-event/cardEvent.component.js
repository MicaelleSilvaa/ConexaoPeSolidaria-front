class CardEvent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const attr = {};
    this.getAttributeNames().forEach(
      (_attr) => (attr[_attr] = this.getAttribute(_attr))
    );

    const linkStyle = document.createElement('link');
    linkStyle.rel = 'stylesheet';
    linkStyle.type = 'text/css';
    linkStyle.href = 'src/component/card-event/cardEvent.component.css';

    const imgContainer = document.createElement('div');
    imgContainer.className = 'img__container';


    const img = document.createElement('img');
    img.src = attr['src'];
  
    imgContainer.appendChild(img);

    const _title = document.createElement('h2');
    _title.innerText = attr['title'];
  
    const _description = document.createElement('p');
    _description.innerText = attr['description'];
  
    const _button = document.createElement('button');
    _button.innerText = "Seja voluntário";
    _button.addEventListener('click', () => window.location.href = attr['href']);
  
    const _cardEvent = document.createElement('div')
    _cardEvent.className = 'card-event'
  
    _cardEvent.appendChild(imgContainer)
    _cardEvent.appendChild(_title)
    _cardEvent.appendChild(_description)
    _cardEvent.appendChild(_button)

    this.shadowRoot.appendChild(linkStyle);
    this.shadowRoot.appendChild(_cardEvent)
  }
}

customElements.define('app-card', CardEvent);