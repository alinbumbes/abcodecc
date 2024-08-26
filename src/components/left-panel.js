import { LitElement, html, css } from 'lit'

export class LeftPanel extends LitElement {
  static properties = {
    todos: { type: Array },
  }

  constructor() {
    super()
    this.todos = []
  }

  static styles = css`
    :host {
      display: block;
      background-color: var(--bg-layer-1);
    }
  `

  addTodoSidebar() {
    this.todos.push['fuck']
  }

  connectedCallback() {
    super.connectedCallback()
    console.log('connected callback')
  }

  disconnectedCallback() {
    console.log('DISSSconnected callback')
    super.disconnectedCallback()
  }

  render() {
    return html`
      <div class="side-panel">
        <h3>Left panel</h3>
        
      </div>
    `
  }
}

customElements.define('left-panel', LeftPanel)
