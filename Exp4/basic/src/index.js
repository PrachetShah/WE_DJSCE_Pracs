import React from "react";
import ReactDOM from "react-dom/client";
import Car from "./Components/car";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const table2 = (
  <table>
    <tr>
      <td>Name</td>
      <td>Roll No</td>
      <td>Year</td>
    </tr>
    <tr>
      <td>ABC</td>
      <td>54</td>
      <td>SE-CSE-DS</td>
    </tr>
  </table>
);
root.render(
  <React.StrictMode>
    <>
      <div>{table2}</div>
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
    </>
  </React.StrictMode>
);
