import { useState, useEffect } from "react";
import "./App.css";

const API = "https://taskmanager-3u3t.onrender.com/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTasks(data);
  };

  const createTask = async () => {
    if (!title.trim()) return;
    setLoading(true);
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, priority }),
    });
    setTitle("");
    setDescription("");
    setPriority("Medium");
    await fetchTasks();
    setLoading(false);
  };

  const updateStatus = async (task, newStatus) => {
    await fetch(`${API}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, status: newStatus }),
    });
    await fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    await fetchTasks();
  };

  const priorityColor = (p) => {
    if (p === "High") return "#ff6b6b";
    if (p === "Medium") return "#ffd93d";
    return "#6bcb77";
  };

  const statusColor = (s) => {
    if (s === "Completed") return "#6bcb77";
    if (s === "In Progress") return "#7eb8f7";
    return "#9ca3af";
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Task Manager</h1>

        <div className="form-card">
          <input
            type="text"
            placeholder="Task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description (optional)..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="form-row">
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <button onClick={createTask} disabled={loading}>
              {loading ? "Adding..." : "+ Add Task"}
            </button>
          </div>
        </div>

        <div className="tasks">
          {tasks.length === 0 && (
            <p className="empty">No tasks yet. Add one above.</p>
          )}
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <div className="task-header">
                <span className="task-title">{task.title}</span>
                <span
                  className="priority-badge"
                  style={{ color: priorityColor(task.priority) }}
                >
                  {task.priority}
                </span>
              </div>
              {task.description && (
                <p className="task-desc">{task.description}</p>
              )}
              <div className="task-footer">
                <select
                  value={task.status}
                  onChange={(e) => updateStatus(task, e.target.value)}
                  style={{ color: statusColor(task.status) }}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
                <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;