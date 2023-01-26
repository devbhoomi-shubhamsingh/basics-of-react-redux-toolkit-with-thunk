import "./App.css";
import CounterApp from "./components/CounterApp";

function App() {
  console.log("process.env.NODE_ENV:: ", process.env.NODE_ENV);
  return (
    <div className="App">
      <h1>Basic of React Redux-Toolkit</h1>
      <CounterApp />
    </div>
  );
}

export default App;
