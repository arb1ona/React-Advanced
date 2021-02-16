import { useState } from "react";

const Tasks = () => {
  const [tasks, settasks] = useState([
    { id: 1, text: "Clean up the makeup", day: "Feb 16th at 10:00pm" },
    { id: 2, text: "Check the email inbox", day: "Feb 16th at 12:00pm" },
    { id: 3, text: "Prepare lunch", day: "Feb 16th at 1:30pm" },
    { id: 4, text: "Go out for a walk", day: "Feb 16th at 7:00pm" },
  ]);

  return (
    <>
      {tasks.map((item) => (
        <h3 key={item.id}>{item.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
