import { LitElement, html, css } from 'lit';

class MyComponent extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = 'Portfolio';
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        color: var(--primary-color, black);
      }
    `;
  }

  render() {
    return html`<h1>Welcome to ${this.name}!</h1>`;
  }
}

customElements.define('my-component', MyComponent);