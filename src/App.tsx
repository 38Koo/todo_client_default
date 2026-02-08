import { Link } from 'react-router'

function App() {
  const todos = [
    { id: 1, text: 'Complete project documentation', completed: false },
    { id: 2, text: 'Review pull requests', completed: false },
    { id: 3, text: 'Update dependencies', completed: true },
    { id: 4, text: 'Write unit tests', completed: false },
  ]

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h1 style={{ textAlign: 'center' }}>Todo List</h1>

        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Add a new task..."
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '14px'
            }}
          />
          <button
            style={{
              padding: '8px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
                border: '1px solid #dee2e6'
              }}
            >
              <input type="checkbox" defaultChecked={todo.completed} />
              <Link
                to={`/item/${todo.id}`}
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#6c757d' : '#212529'
                }}
              >
                {todo.text}
              </Link>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '20px',
            padding: '12px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              All
            </button>
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: '#f0f0f0',
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Active
            </button>
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: '#f0f0f0',
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Completed
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#6c757d' }}>
              {todos.filter(t => !t.completed).length} items left
            </span>
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Clear completed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
