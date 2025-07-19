import { LitElement, html, css } from 'lit'
import { AbColumn } from './components/ab-column.js'

export class AbApp extends LitElement {
  static styles = css`
    .ab-app {
      display: flex;
      gap: 16px;
      padding: 16px;;
    }
  `

  static properties = {
    columnsData: { type: Array },
  }

  constructor() {
    super()
    this.columnsData = [
      { id: 1, title: 'Column 1' },
      { id: 2, title: 'Column 2' },
      { id: 3, title: 'Column 3' },
    ]
  }

  render() {
    return html` <div class="ab-app"> ${this.columnsData.map(col => html`<ab-column .title=${col.title}></ab-column>`)} </div> `
  }
}

customElements.define('ab-app', AbApp)
