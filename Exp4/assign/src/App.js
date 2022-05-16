import "./App.css";
import Counter from "./components/counter";
import Data from "./components/data";
import { useState } from "react";

function App() {
  const [heading, setHeading] = useState([0, "Hello World"]);

  const data = [
    {
      id: 1,
      name: "Prachet",
      sap: 60009200029,
      batch: "K1",
    },
    {
      id: 2,
      name: "Kevin",
      sap: 60009200099,
      batch: "K1",
    },
  ];

  const handleClick = () => {
    if (heading[0] == 0) {
      setHeading([1, "Heading Changed"]);
      console.log(heading);
    } else {
      setHeading([0, "Prachet"]);
    }
  };

  return (
    <>
      <div className="App" style={{ fontSize: "100px" }}>
        <div>{heading[1]}</div>
      </div>
      <div className="App">
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            fontSize: "20px",
            padding: "5px",
          }}
          onClick={handleClick}
        >
          Click me
        </button>
        {data.map((person) => {
          return <Data key={person.id} {...person} />;
        })}
        <Counter />
      </div>
    </>
  );
}

export default App;
