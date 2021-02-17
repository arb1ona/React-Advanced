import Task from "./Task";
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((item) => (
        <Task key={item.id} item={item} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
