class Loading extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {

    const linkStyle = document.createElement('link');
    linkStyle.rel = 'stylesheet';
    linkStyle.type = 'text/css';
    linkStyle.href = 'src/component/loading/loading.component.css';
    
    const externalDiv =document.createElement('div');
    externalDiv.className = "loadingio-spinner-rolling-1ztmzum49br";

    const internalDiv =document.createElement('div');
    internalDiv.className = "ldio-ndxpc23jxnl";
    internalDiv.appendChild(document.createElement('div'));

    externalDiv.appendChild(internalDiv)
    
    this.shadowRoot.appendChild(externalDiv);
    this.shadowRoot.appendChild(linkStyle);

  }
}

customElements.define('app-loading', Loading);