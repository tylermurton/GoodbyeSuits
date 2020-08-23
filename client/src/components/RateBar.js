import React, { Component } from "react";

class RateBar extends Component {
  state = {
    buyrating: 0,
    holdrating: "",
    sellrating: ""
  };

  render() {
    return (
      <div>
      Buy: {this.state.buyrating}, Hold: {this.state.holdrating}
      </div>
    )

  }




}

// const RateBar = (props) => {
//     const { bgcolor, buyrating } = props;
//     return (
//       <div>
//         <div>
//           <span>{`${buyrating}%`}</span>
//         </div>
//       </div>
//     );
//   };
  
  export default RateBar;