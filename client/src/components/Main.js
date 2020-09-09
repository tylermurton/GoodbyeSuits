import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import RateBar from "./RateBar";
import Buttons from "./Buttons";
import ReactDOM from 'react-dom';
// import "../styles/Main.css";

export default class Main extends Component {



  state = {
    tableElements: [],



  };

  companies= [
    { name: "Amazon", ticker: "amzn" },
    { name: "American Airlines", ticker: "aal" }
  ]

  


  renderTable(event) {
    const filter = event.target.value;
    console.log(filter);
    const tableElements = this.companies.filter(company =>
      company.name.toLowerCase().includes(filter)
    ).map(company => {
      return <tr key={company.ticker}>
        <th>{company.name}</th>
        <th>{company.ticker.toUpperCase()}</th>
        <th>
          <Buttons updateStateValues={this.updateStateValues} company={company.name.toLowerCase().replace(" ", "")} />
        </th>
        <th><RateBar ratingdata={this.state[company.name.toLowerCase().replace(" ", "")]} /></th>
      </tr>
    })

    this.setState({ tableElements })
  }



  // ***** move companies array here*****
  //******move renderTable here******





  // handleSearchChange = event => {

  //   console.log(event.target.value);
  //   const filter = event.target.value;
  //   const filteredList = this.state.stonks.filter(item => {
  //     // merge data together, then see if user input is anywhere inside
  //     let values = Object.values(item)
  //       .join("")
  //       .toLowerCase();
  //     return values.indexOf(filter.toLowerCase()) !== -1;
  //   });
  //   this.setState({ filteredStonks: filteredList });

  // }

  render() {


    return (
      <>
        <Nav renderTable={this.renderTable} />   {/* instead of handleSearchChange use renderTable  */}
        <DataTable
          headings={this.headings}
          tableElements={this.state.tableElements}
          handleSort={this.handleSort}
        />
      </>
    );
  }
}