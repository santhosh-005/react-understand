import "./App.css";
import imageData from "./Components/DataComponent";

function App() {
  const data = imageData();

  return (
    <div>
      <h1>USING FUNCTIONAL COMPONENT</h1>
      <div className="grid">
        {data.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
