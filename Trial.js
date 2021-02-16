import "./app.css";

function App() {
  const name = "Arbiona";
  const x = false;

  return (
    <div className="container">
      <p>
        {1 + 2 + 3}
        <br />
        {name}
        <br />
        {x ? "Yes" : "No"}
        if X then will show YES
      </p>
    </div>
  );
}

export default App;
