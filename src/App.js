import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Clean up the makeup", day: "Feb 16th at 10:00pm" },
    { id: 2, text: "Check the email inbox", day: "Feb 16th at 12:00pm" },
    { id: 3, text: "Prepare lunch", day: "Feb 16th at 1:30pm" },
    { id: 4, text: "Go out for a walk", day: "Feb 16th at 7:00pm" },
  ]);

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="hello folks" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
