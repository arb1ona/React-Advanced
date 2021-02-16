const Task = ({ item }) => {
  return (
    <div className="task">
      <h3>{item.text}</h3>
      <p>{item.day}</p>
    </div>
  );
};

export default Task;
