const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((item) => (
        <h3 key={item.id}>{item.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
