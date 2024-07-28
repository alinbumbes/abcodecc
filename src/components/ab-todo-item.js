import { LitElement, html, css } from "lit";

export class AbTodoItem extends LitElement {
  static properties = {
    todo: { type: String },
    index: { type: Number },
  };

  static styles = css`
    :host {
      display: flex;
      justify-content: space-between;
      padding: var(--pad);
      border-bottom: 1px solid var(--color-border);
      background-color:var(--bg-layer-2);
    }
  `;

  constructor() {
    super();
    this.todo = "";
    this.index = -1;
  }

  removeItem() {
    this.dispatchEvent(
      new CustomEvent("remove-todo", {
        detail: { index: this.index },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <span>${this.todo}</span>
      <button @click="${this.removeItem}">❌</button>
    `;
  }
}
customElements.define("ab-todo-item", AbTodoItem);
