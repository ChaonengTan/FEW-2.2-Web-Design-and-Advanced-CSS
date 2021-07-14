class TTape extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._tape = document.createElement('div')
      this._shadowRoot.appendChild(this._tape)
      this._tape.innerHTML = this.innerHTML
    }
    connectedCallback() {
        this._timer = setInterval(() => {
        this._tape.innerHTML = this._tape.innerHTML.slice(1)+this._tape.innerHTML.slice(0,1)
      }, 1000)
    }
    disconnectedCallback() {
      clearInterval(this._timer)
    }
  }
  customElements.define('ticker-tape', TTape);