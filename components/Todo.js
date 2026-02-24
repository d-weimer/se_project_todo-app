class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    const todoDate = this._todoElement.querySelector(".todo__date");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this_data.name;
    todoCheckboxEl.checked = this_data.completed;

    todoCheckboxEl.id = `todo-${this_data.id}`;
    todoLabel.setAttribute("for", `todo-${this_data.id}`);

    const dueDate = new Date(this_data.date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    todoDeleteBtn.addEventListener("click", () => {
      todoElement.remove();
    });

    return this._todoElement;
  }
}

export default Todo;
