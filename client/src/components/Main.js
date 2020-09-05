import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
// import "../styles/Main.css";

export default class Main extends Component {

  state = {
    stonks: [{}],
    order: "descend",
    filteredStonks: [{}]
  }

  handleSort = heading => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }

  const compareFnc = (a, b) => {
    if (this.state.order === "ascend") {
      // account for missing values
      if (a[heading] === undefined) {
        return 1;
      } else if (b[heading] === undefined) {
        return -1;
      }
      // numerically
      else if (heading === "name") {
        return a[heading].first.localeCompare(b[heading].first);
      } else {
        return a[heading] - b[heading];
      }
    } else {
      // account for missing values
      if (a[heading] === undefined) {
        return 1;
      } else if (b[heading] === undefined) {
        return -1;
      }
      // numerically
      else if (heading === "name") {
        return b[heading].first.localeCompare(a[heading].first);
      } else {
        return b[heading] - a[heading];
      }
    }

  }
  const sortedStonks = this.state.filteredStonks.sort(compareFnc);
  this.setState({ filteredStonks: sortedStonks });
}

  



  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.stonks.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredStonks: filteredList });
  }


  // componentDidMount() {
  //   API.getStonks().then(results => {
  //     this.setState({
  //       stonks: results.data.results,
  //       filteredStonks: results.data.results
  //     });
  //   });
  // }
  
  render() {


    return (
      <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <DataTable />
      </>
    );
  }
}