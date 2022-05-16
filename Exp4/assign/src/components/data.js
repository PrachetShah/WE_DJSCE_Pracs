import React from "react";

const Data = ({ name, sap, batch }) => {
  return (
    <div className="container">
      <h2>
        Hello {name}, your SAP ID is {sap} and you are from {batch} batch.
      </h2>
    </div>
  );
};
export default Data;
