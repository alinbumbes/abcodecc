class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const template = document.getElementById("template");
    
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.heading= this.shadowRoot.querySelector('h3')
  }



  get headingAttribute() {
    return this.getAttribute("heading")
  }

  
}
customElements.define("ab-card", Card);
