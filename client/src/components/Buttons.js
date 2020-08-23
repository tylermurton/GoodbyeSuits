import React, { Component, useState } from "react";
import RateBar from "./RateBar";

export default class Buttons extends Component {
    //When you click the button
    handleBtnClick() {
        alert('hello');
        return 

        const buyrating = <RateBar state={buyrating} />
        const [buy, setBuy] = useState();
        setBuy({ buy: this.state.buyrating + 1 })

        


    }

    render() {

        return (
            <div>
                <button className="btn btn-success" onClick={this.handleBtnClick}>Buy</button>
                <button className="btn btn-warning">Hold</button>
                <button className="btn btn-danger">Sell</button>
            </div>
        );
    }
}