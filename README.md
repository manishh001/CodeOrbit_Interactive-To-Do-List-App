# 📝 Interactive To-Do List App

A simple, interactive, and responsive To-Do List application built using **HTML, CSS, and JavaScript**. This project allows users to add tasks, mark them as completed, edit existing tasks, and delete tasks. It also uses browser `localStorage` to save tasks so they remain available after refreshing the page.

## 📌 Project Overview

The Interactive To-Do List App helps users organize their daily activities through a clean and user-friendly interface. It features a purple gradient background, animated task entries, larger task text, and simple buttons.

The application uses JavaScript DOM manipulation to update the task list dynamically without reloading the page.

## ✨ Features

- **Add Tasks:** Add new tasks using the Add button or by pressing Enter.
- **Mark Tasks as Completed:** Use checkboxes to mark tasks as complete.
- **Delete Tasks:** Remove tasks from the list with the Delete button.
- **Edit Tasks:** Double-click a task's text to edit it.
- **Local Storage:** Automatically saves tasks in the browser using `localStorage`.
- **Persistent Tasks:** Saved tasks remain after refreshing the page in the same browser.
- **Responsive Design:** Adapts to mobile and desktop screen sizes.
- **Interactive UI:** Includes hover effects, smooth animations, and a gradient background.
- **Input Validation:** Prevents empty tasks from being added or saved during editing.
- **Accessibility Support:** Includes accessible labels for the input, task checkboxes, and Delete buttons.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structures the application |
| CSS3 | Styles the interface and provides responsive design and animations |
| JavaScript | Implements task management and DOM manipulation |
| DOM API | Dynamically creates, updates, and removes task elements |
| localStorage | Stores tasks in the browser |

## 📂 Project Structure

```text
TodoList/
│
├── index.html      # HTML structure
├── style.css       # Styling and responsive design
├── script.js       # Application logic
└── README.md       # Project documentation
```

## 🚀 Getting Started

### Prerequisites

You only need:
- A modern web browser, such as Google Chrome, Microsoft Edge, or Firefox.
- A code editor such as Visual Studio Code (optional, but recommended).

No additional libraries, frameworks, or package installations are required.

### Installation and Setup

**Step 1: Download or clone the project**

If your project is hosted on GitHub, clone it using:

```bash
git clone YOUR_REPOSITORY_URL
```

Alternatively, download the project files to your computer.

**Step 2: Open the project folder**

Make sure the folder contains `index.html`, `style.css`, and `script.js`.

**Step 3: Run the application**

Open `index.html` in your browser.

You can also use the Live Server extension in Visual Studio Code for local development.

## 🔗 Live Demo & GitHub Repository

- **🌐 Live Website:** [View Interactive To-Do List App](https://manishh001.github.io/CodeOrbit_Interactive-To-Do-List-App/)
- **📂 GitHub Repository:** [View Source Code on GitHub](https://github.com/manishh001/CodeOrbit_Interactive-To-Do-List-App.git)

Explore the live application and check out the source code to understand how HTML, CSS, JavaScript, and localStorage work together to build an interactive To-Do List App.

## 💻 How to Use

1. Open the application in your browser.
2. Enter a task in the input field.
3. Click **Add** or press **Enter** to add the task.
4. Tick the checkbox to mark the task as completed.
5. Double-click the task text to edit it.
6. Click **Delete** to remove a task.
7. Refresh the browser to verify that your saved tasks remain available.

## 💾 How Local Storage Works

The application stores tasks in the browser under the key `todos`.

Each task is represented by an object containing its text and completion status:

```javascript
{
    text: "Complete JavaScript practice",
    completed: false
}
```

The `saveTodos()` function converts the tasks array into JSON and saves it in local storage.

The `loadTodos()` function retrieves and parses the saved data when the application starts.

This allows tasks to persist across page refreshes in the same browser and origin. Data is not automatically synchronized across different browsers or devices.

## 🎨 User Interface

The application includes:

- A purple gradient background.
- A centered heading and subtitle.
- A task input field and a simple Add button.
- A translucent task list container.
- Large task text and easily visible checkboxes.
- Red Delete buttons.
- A strikethrough style for completed tasks.
- Smooth fade-in animations for task entries.
- Responsive styling for smaller screens.

## 📱 Responsive Design

CSS media queries adjust the interface for screens with a width of 480px or less.

On smaller screens, the heading, task text, buttons, and list spacing are adjusted to improve usability.

## 🔒 Data and Privacy

Tasks are stored locally in your browser using `localStorage`. The application does not require an account or a backend server.

**Note:** Clearing the browser's site data or local storage may delete saved tasks. Avoid using private browsing if you need tasks to persist after closing the browser.

## 🔮 Future Improvements

Possible enhancements include:

- Add task deadlines and reminders.
- Add task categories and priority levels.
- Filter tasks by All, Active, and Completed.
- Add a Clear Completed Tasks option.
- Add dark mode.
- Add drag-and-drop task reordering.
- Add cloud synchronization and user authentication.

## 🎯 Learning Outcomes

This project demonstrates practical use of:

- HTML page structure and semantic elements.
- CSS styling, Flexbox, media queries, and animations.
- JavaScript event listeners and functions.
- DOM element creation and manipulation.
- Arrays and objects for task management.
- JSON serialization and parsing.
- Browser local storage for data persistence.
- Basic input validation and accessibility attributes.

## 👨‍💻 Author

**Manish Kumar**

- GitHub: [manishh001](https://github.com/manishh001)
- LinkedIn: [Manish Kumar](https://linkedin.com/in/manish-kumar-3bb405322)


## 📄 License

This project is available for learning and personal use. You may adapt it for educational purposes. Add a specific open-source license file if you want to formally define redistribution and reuse permissions.

---

⭐ **If you find this project useful, consider giving the repository a star on GitHub!**
