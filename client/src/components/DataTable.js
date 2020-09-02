import React from "react";
// import DataBody from "./DataBody";
// import "../styles/DataTable.css";
import RateBar from "./RateBar";
import Buttons from "./Buttons";


class DataTable extends React.Component {
  constructor(props) {
    super(props);
    const { headings, users, handleSort } = props;
    this.updateStateValues = this.updateStateValues.bind(this);
    this.state = {
      amazon: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      americanairlines: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      apple: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      aurora: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      // adma: {
      //   buyrating: 0,
      //   holdrating: 0,
      //   sellrating: 0
      // },

      // agnc: {
      //   buyrating: 0,
      //   holdrating: 0,
      //   sellrating: 0
      // },



    };
  }

  updateStateValues(company, action) {
    console.log({ company })
    console.log({ action })
    let companyState = this.state[company.toLowerCase()];
    companyState[action] += 1;

    this.setState({
      [company]: companyState
    })
  }


  render() {
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
          <tr>
            <th>Amazon</th>
            <th>AMZN</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="amazon" />
            </th>
            <th><RateBar ratingdata={this.state.amazon} /></th>
          </tr>


          <tr>
            <th>American Airlines</th>
            <th>AAL</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="americanairlines" />
            </th>
            <th><RateBar ratingdata={this.state.americanairlines} /></th>
          </tr>


          <tr id="apple">
            <th>Apple</th>
            <th>AAPL</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="apple" />
            </th>
            <th><RateBar ratingdata={this.state.apple} /></th>
          </tr>


          <tr>
            <th>Aurora Cannabis</th>
            <th>ACB</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="aurora" />
            </th>
            <th><RateBar ratingdata={this.state.aurora} /></th>
          </tr>


          {/* <tr>
            <th>ADMA Biologics</th>
            <th>ADMA</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="adma" />
            </th>
            <th><RateBar ratingdata={this.state.adma} /></th>
          </tr> */}


          {/* <tr>
            <th>AGNC Investment Corp</th>
            <th>ADMA</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="agnc" />
            </th>
            <th><RateBar ratingdata={this.state.agnc} /></th>
          </tr> */}







        </table>
      </div>
    );
  }


}


export default DataTable;