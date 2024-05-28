import { LitElement, html, css } from "lit";
import { AbTodoItem } from "./ab-todo-item";

export class AbTodo extends LitElement {
  static properties = {
    todos: { type: Array },
    newTodo: { type: String },
  };

  constructor() {
    super();
    this.todos = [];
    this.newTodo = "";
  }

  static styles = css`
    .todo-container {
      max-width: 300px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .add-todo {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    input {
      flex: 1;
      padding: 8px;
      margin-right: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 8px 16px;
      background-color: #28a745;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #ccc;
    }
  `;

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos = [...this.todos, this.newTodo];
      this.newTodo = "";
    }
  }

  handleInput(e) {
    this.newTodo = e.target.value;
  }

  removeTodoHandler(e) {
    const index = e.detail.index;
    this.todos = this.todos.filter((_, i) => i !== index);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("remove-todo", this.removeTodoHandler);
  }

  disconnectedCallback() {
    this.removeEventListener("remove-todo", this.removeTodoHandler);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="todo-container">
        <h3>To-Do List</h3>
        <ul>
          ${this.todos.map(
            (todo, index) => html`
              <li>
                <ab-todo-item .todo="${todo}" .index="${index}"></ab-todo-item>
              </li>
            `
          )}
        </ul>
        <div class="add-todo">
          <input
            type="text"
            .value="${this.newTodo}"
            @input="${this.handleInput}"
            placeholder="New to-do"
          />
          <button @click="${this.addTodo}" ?disabled="${!this.newTodo.trim()}">
            Add
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("ab-todo", AbTodo);
