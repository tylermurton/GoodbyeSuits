import React, { Component, useState } from "react";


const Buttons = (props) => {
    const { updateStateValues, company } = props;
    return (
        <div>
            <button className="btn btn-success" onClick={() => {updateStateValues(company, "buyrating")}}>Buy</button>
            <button className="btn btn-warning" onClick={() => {updateStateValues(company, "holdrating")}}>Hold</button>
            <button className="btn btn-danger" onClick={() => {updateStateValues(company, "sellrating")}}>Sell</button>
        </div>
    );
}

export default Buttons;