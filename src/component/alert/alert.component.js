class Alert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {

    const attr = {};
    this.getAttributeNames().forEach(
      (_attr) => (attr[_attr] = this.getAttribute(_attr))
    );

    const type = attr['type'] || 'error';

    const icon = {
      'error': 'M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z',
      'success': 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z'
    }

    const linkStyle = document.createElement('link');
    linkStyle.rel = 'stylesheet';
    linkStyle.type = 'text/css';
    linkStyle.href = 'src/component/alert/alert.component.css';

    const externalDiv = document.createElement('div');
    externalDiv.classList.add(`fade-in`);
    externalDiv.classList.add(`${type}__container`);
    externalDiv.innerHTML = `<div class="${type}__icon"><svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 24 24" width = "24" height = "24" fill = "currentColor" > <path d="${icon[type]}"></path></svg></div ><div><span class="${type}__text">${attr['value'] || ""}</span></div>`;


    this.shadowRoot.appendChild(linkStyle);
    this.shadowRoot.appendChild(externalDiv);

    setTimeout(() => {
      externalDiv.classList.remove('fade-in');
      externalDiv.classList.add('fade-out');
    }, 4200);

  }
}

customElements.define('app-alert', Alert);