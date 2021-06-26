import Cover from "./components/CoverSection/Cover";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "300px",
          overflowY: "hidden",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Cover height={300} />
      </div>
    </div>
  );
}

export default App;
