
/* Select DOM Elements */
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

/* Load saved todos from localStorage */
function loadTodos() {
    try {
        const saved = localStorage.getItem("todos");
        const parsed = saved ? JSON.parse(saved) : [];

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.filter(todo =>
            todo &&
            typeof todo.text === "string" &&
            typeof todo.completed === "boolean"
        );
    } catch (error) {
        console.error("Could not load saved todos:", error);
        return [];
    }
}

const todos = loadTodos();

/* Save todos to localStorage */
function saveTodos() {
    try {
        localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
        console.error("Could not save todos:", error);
    }
}

/* Create a DOM node for a todo */
function createTodoNode(todo, index) {
    const li = document.createElement("li");
    li.classList.toggle("completed", todo.completed);

    /* Checkbox to mark a todo complete */
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    function updateCheckboxLabel() {
        checkbox.setAttribute(
            "aria-label",
            `Mark "${todo.text}" ${todo.completed ? "incomplete" : "complete"
            }`
        );
    }

    updateCheckboxLabel();

    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        li.classList.toggle("completed", todo.completed);
        updateCheckboxLabel();
        saveTodos();
    });

    /* Todo Text */
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;
    textSpan.style.margin = "0 8px";
    textSpan.title = "Double-click to edit";

    /* Edit todo using double-click */
    textSpan.addEventListener("dblclick", () => {
        const newText = prompt("Edit todo", todo.text);

        if (newText === null) {
            return;
        }

        const trimmedText = newText.trim();

        if (!trimmedText) {
            alert("Todo cannot be empty.");
            return;
        }

        todo.text = trimmedText;
        textSpan.textContent = trimmedText;

        updateCheckboxLabel();

        delBtn.setAttribute(
            "aria-label",
            `Delete "${todo.text}"`
        );

        saveTodos();
    });

    /* Delete Button */
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "Delete";

    delBtn.setAttribute(
        "aria-label",
        `Delete "${todo.text}"`
    );

    delBtn.addEventListener("click", () => {
        todos.splice(index, 1);

        render();
        saveTodos();
    });

    /* Append elements to the list item */
    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(delBtn);

    return li;
}

/* Render all todos */
function render() {
    list.replaceChildren();

    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index);
        list.appendChild(node);
    });
}

/* Add a new todo */
function addTodo() {
    const text = input.value.trim();

    if (!text) {
        input.focus();
        return;
    }

    todos.push({
        text: text,
        completed: false
    });

    input.value = "";

    render();
    saveTodos();
    input.focus();
}

/* Add button click event */
addBtn.addEventListener("click", addTodo);

/* Press Enter to add a todo */
input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addTodo();
    }
});

/* Display saved todos on page load */
render();
