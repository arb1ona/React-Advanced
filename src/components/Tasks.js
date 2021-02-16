import Task from "./Task";
const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </>
  );
};

export default Tasks;
