import React, { Component } from "react";
import DataTable from "./DataTable";





const RateBar = (props) => {
    const { buyrating, holdrating, sellrating } = props.ratingdata;
    return (
      <div>
        <div>
          <span>{`${buyrating}`}</span>
          <br/>
          <span>{`${holdrating}`}</span>
          <br/>
          <span>{`${sellrating}`}</span>
          
        </div>
      </div>
    );
  };
  
  export default RateBar;