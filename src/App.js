import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, settasks] = useState([
    { id: 1, text: "Clean up the makeup", day: "Feb 16th at 10:00pm" },
    { id: 2, text: "Check the email inbox", day: "Feb 16th at 12:00pm" },
    { id: 3, text: "Prepare lunch", day: "Feb 16th at 1:30pm" },
    { id: 4, text: "Go out for a walk", day: "Feb 16th at 7:00pm" },
  ]);
  return (
    <div className="container">
      <Header title="hello folks" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
