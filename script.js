class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const template = document.getElementById("template");
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
    this.valueHeader = this.shadowRoot.querySelector("h3");
    this.valueHeader.innerHTML = this.value;
    this.substractBtn = this.shadowRoot.querySelector("#subtract");
    this.addBtn = this.shadowRoot.querySelector("#add");
  }

  connectedCallback() {
    this.addBtn.addEventListener("click", this.add.bind(this));
    this.substractBtn.addEventListener("click", this.substract.bind(this));
  }

  get value() {
    return this.getAttribute("value");
  }

  set value(val) {
    this.setAttribute("value", val);
  }

  substract() {
    this.value = +this.value - 1;
    console.log(this.value);
  }

  add() {
    this.value = +this.value + 1;
    console.log(this.value);
  }

  static get observedAttributes() {
    return ["value"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    this.valueHeader.innerHTML = this.value;
  }

  disconnectedCallback() {
    this.substractBtn.addEventListener("click", this.substract);
    this.addBtn.addEventListener("click", this.add);
  }
}
customElements.define("lut-counter", Card);
