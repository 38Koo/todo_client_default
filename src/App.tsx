import './App.css'

function App() {
  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Todo List</h1>
      </header>

      <div className="todo-input-section">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
        />
        <button className="add-button">Add</button>
      </div>

      <ul className="todo-list">
        <li className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Complete project documentation</span>
          <button className="delete-button">×</button>
        </li>
        <li className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Review pull requests</span>
          <button className="delete-button">×</button>
        </li>
        <li className="todo-item completed">
          <input type="checkbox" className="todo-checkbox" checked />
          <span className="todo-text">Update dependencies</span>
          <button className="delete-button">×</button>
        </li>
        <li className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Write unit tests</span>
          <button className="delete-button">×</button>
        </li>
      </ul>

      <footer className="todo-footer">
        <span className="todo-count">3 items left</span>
        <div className="todo-filters">
          <button className="filter-button active">All</button>
          <button className="filter-button">Active</button>
          <button className="filter-button">Completed</button>
        </div>
        <button className="clear-button">Clear completed</button>
      </footer>
    </div>
  )
}

export default App
