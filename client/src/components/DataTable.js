import React from "react";
// import DataBody from "./DataBody";
// import "../styles/DataTable.css";
import RateBar from "./RateBar";
import Buttons from "./Buttons";

function DataTable({ headings, users, handleSort }) {
  return (
    <div className="datatable mt-5">

      <table id="table" className="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th>Company</th>
            <th>Ticker</th>
            <th>Rate</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tr id="apple">
          <th>Apple</th>
          <th>AAPL</th>
          <th>
            <Buttons />
          </th>
          <th><RateBar /></th>
        </tr>
        <tr>
          <th>Amazon</th>
          <th>AMZN</th>
          <th>
            <button className="btn btn-success">Buy</button>
            <button className="btn btn-warning">Hold</button>
            <button className="btn btn-danger">Sell</button>
          </th>
          {/* <th><RateBar /></th> */}
        </tr>
      </table>
    </div>
  );
}

export default DataTable;