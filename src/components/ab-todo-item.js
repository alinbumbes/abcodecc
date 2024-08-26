import { LitElement, html, css } from 'lit'

export class AbTodoItem extends LitElement {
  static properties = {
    todo: { type: String },
    index: { type: Number },
  }

  static styles = css`
    :host {
      min-height: 36px;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: var(--shadow-default);
      color: var(--ab-text);
      cursor: pointer;
      scroll-margin: 8px;
      display:flex;
      justify-content: space-between;
      padding-inline: var(--pad);
      align-items: center;
    }
  `

  constructor() {
    super()
    this.todo = ''
    this.index = -1
  }

  removeItem() {
    this.dispatchEvent(
      new CustomEvent('remove-todo', {
        detail: { index: this.index },
        bubbles: true,
        composed: true,
      })
    )
  }

  render() {
    return html`
    <div class="todo-task flx align-center">
      <span>${this.todo}</span>
      <button @click="${this.removeItem}">x </button>
    </div>
      
    `
  }
}
customElements.define('ab-todo-item', AbTodoItem)
