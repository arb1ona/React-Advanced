import "./app.css";
import Header from "./components/Header";
function App() {
  const name = "Arbiona";
  const x = false;

  return (
    <div className="container">
      <Header />
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
