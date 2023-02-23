import Home from "./components/Home";
import img from "./components/planting.webp";

function App() {
  const style = { backgroundImage: `url(${img})`, backgroundSize: "cover" };
  return (
    <div className="App" style={style}>
      <Home></Home>
    </div>
  );
}

export default App;
