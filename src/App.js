import "./App.css";
import Contents from "./components/contents";
import Forms from "./components/forms";
import BackgroundShapes from "./components/BackgroundShapes";

function App() {
  return (
    <div>
      <BackgroundShapes />
      <div className="gridPage">
        <Contents />
        <Forms />
      </div>
    </div>
  );
}

export default App;
