import React from "react";
// import DataBody from "./DataBody";
// import "../styles/DataTable.css";
import RateBar from "./RateBar";
import Buttons from "./Buttons";


class DataTable extends React.Component {

  

  constructor(props) {
    super(props);
    const { headings, tableElements, handleSort } = props;
    this.updateStateValues = this.updateStateValues.bind(this);
    // this.renderTable = this.renderTable.bind(this);
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

      adma: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      agnc: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      amd: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      activision: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      bankofamerica: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      bedbathandbeyond: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      buildabear: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      bestbuy: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      citigroup: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      cheesecakefactory: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      carnival: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      canopygrowth: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      comcast: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      chipotle: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      costco: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      salesforce: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      cronos: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      crocs: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      cisco: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      deltaairlines: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      dell: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      draftkings: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      dicks: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      dollartree: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      dominos: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      ebay: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      callaway: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      ford: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      fastly: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      cedarfair: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      generalmotors: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      acushnet: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      alphabet: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      gap: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      hertz: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      imax: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      jumia: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      jpmorgan: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      coke: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      kodak: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      carmax: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      lululemon: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      lyft: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      macys: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      mcdonalds: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      moderna: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      morganstanley: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      microsoft: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      norwegiancruiseline: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      nio: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      nike: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      northerntrust: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      nvidia: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      organigram: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      occidentalpetroleum: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      pennnationalgaming: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      pepsico: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      procterandgamble: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      paypal: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      royalcaribbean: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      ruger: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      rocketcompanies: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      roku: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      spirit: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      starbucks: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      shakeshack: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      shopify: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      spotify: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      square: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      target: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      tesla: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      twilio: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      uber: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      wayfair: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      walmart: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      slack: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      zillow: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

      zoom: {
        buyrating: 0,
        holdrating: 0,
        sellrating: 0
      },

    };
    // this.companies = [
    //   {name:"Amazon", ticker: "amzn"},
    //   {name:"American Airlines", ticker: "aal"}
    // ]
  }

  // renderTable(event){
  //   const filter = event.target.value;
  //      const tableElements =  this.companies.filter(company => 
  //        company.name.toLowerCase().includes(filter)
  //        ).map( company => {
  //      return <tr key={company.ticker}>
  //        <th>{company.name}</th>
  //         <th>{company.ticker.toUpperCase()}</th>
  //        <th>
  //          <Buttons updateStateValues={this.updateStateValues} company={company.name.toLowerCase().replace(" ","")} />
  //        </th>
  //        <th><RateBar ratingdata={this.state[company.name.toLowerCase().replace(" ","")]} /></th>
  //        </tr>
  //      })

  //      this.setState({tableElements})
  // }


  updateStateValues(company, action) {
    // ADD 1 TO COUNT
    console.log({ company })
    console.log({ action })
    let companyState = this.state[company.toLowerCase()];
    companyState[action] += 1;
    
 this.setState({
      [company]: companyState
    })



    // SAVE TO LOCAL STORAGE
    localStorage.setItem('testObject', JSON.stringify(companyState[action]));
    var retrievedObject = localStorage.getItem('testObject');
    console.log('retrievedObject', JSON.parse(retrievedObject));


   
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
          <tbody>
         
          </tbody>
          {this.tableElements}
          {/* <tr>
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


          <tr>
            <th>ADMA Biologics</th>
            <th>ADMA</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="adma" />
            </th>
            <th><RateBar ratingdata={this.state.adma} /></th>
          </tr>


          <tr>
            <th>AGNC Investment</th>
            <th>AGNC</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="agnc" />
            </th>
            <th><RateBar ratingdata={this.state.agnc} /></th>
          </tr>

          <tr>
            <th>Advanced Micro Devices</th>
            <th>AMD</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="amd" />
            </th>
            <th><RateBar ratingdata={this.state.amd} /></th>
          </tr>

          <tr>
            <th>Activision Blizzard</th>
            <th>ATVI</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="activision" />
            </th>
            <th><RateBar ratingdata={this.state.activision} /></th>
          </tr>

          <tr>
            <th>Bank of America</th>
            <th>BAC</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="bankofamerica" />
            </th>
            <th><RateBar ratingdata={this.state.bankofamerica} /></th>
          </tr>

          <tr>
            <th>Bed Bath and Beyond</th>
            <th>BBBY</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="bedbathandbeyond" />
            </th>
            <th><RateBar ratingdata={this.state.bedbathandbeyond} /></th>
          </tr>

          <tr>
            <th>Build A Bear Workshop</th>
            <th>BBW</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="buildabear" />
            </th>
            <th><RateBar ratingdata={this.state.buildabear} /></th>
          </tr>

          <tr>
            <th>Best Buy</th>
            <th>BBY</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="bestbuy" />
            </th>
            <th><RateBar ratingdata={this.state.bestbuy} /></th>
          </tr>

          <tr>
            <th>Citigroup</th>
            <th>C</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="citigroup" />
            </th>
            <th><RateBar ratingdata={this.state.citigroup} /></th>
          </tr>

          <tr>
            <th>Cheesecake Factory</th>
            <th>CAKE</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="cheesecakefactory" />
            </th>
            <th><RateBar ratingdata={this.state.cheesecakefactory} /></th>
          </tr>

          <tr>
            <th>Carnival</th>
            <th>CCL</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="carnival" />
            </th>
            <th><RateBar ratingdata={this.state.carnival} /></th>
          </tr>

          <tr>
            <th>Canopy Growth</th>
            <th>CGC</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="canopygrowth" />
            </th>
            <th><RateBar ratingdata={this.state.canopygrowth} /></th>
          </tr>

          <tr>
            <th>Comcast</th>
            <th>CMCSA</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="comcast" />
            </th>
            <th><RateBar ratingdata={this.state.comcast} /></th>
          </tr>

          <tr>
            <th>Chipotle</th>
            <th>CMG</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="chipotle" />
            </th>
            <th><RateBar ratingdata={this.state.chipotle} /></th>
          </tr>

          <tr>
            <th>Costco</th>
            <th>COST</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="costco" />
            </th>
            <th><RateBar ratingdata={this.state.costco} /></th>
          </tr>

          <tr>
            <th>Salesforce</th>
            <th>CRM</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="salesforce" />
            </th>
            <th><RateBar ratingdata={this.state.salesforce} /></th>
          </tr>

          <tr>
            <th>Cronos Group</th>
            <th>CRON</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="cronos" />
            </th>
            <th><RateBar ratingdata={this.state.cronos} /></th>
          </tr>

          <tr>
            <th>Crocs</th>
            <th>CROX</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="crocs" />
            </th>
            <th><RateBar ratingdata={this.state.crocs} /></th>
          </tr>

          <tr>
            <th>Cisco Systems</th>
            <th>CSCO</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="cisco" />
            </th>
            <th><RateBar ratingdata={this.state.cisco} /></th>
          </tr>

          <tr>
            <th>Delta Air Lines</th>
            <th>DAL</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="deltaairlines" />
            </th>
            <th><RateBar ratingdata={this.state.deltaairlines} /></th>
          </tr>

          <tr>
            <th>Dell Technologies</th>
            <th>DELL</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="dell" />
            </th>
            <th><RateBar ratingdata={this.state.dell} /></th>
          </tr>

          <tr>
            <th>Draftkings</th>
            <th>DKNG</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="draftkings" />
            </th>
            <th><RateBar ratingdata={this.state.draftkings} /></th>
          </tr>

          <tr>
            <th>Dick's Sporting Goods</th>
            <th>DKS</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="dicks" />
            </th>
            <th><RateBar ratingdata={this.state.dicks} /></th>
          </tr>

          <tr>
            <th>Dollar Tree</th>
            <th>DLTR</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="dollartree" />
            </th>
            <th><RateBar ratingdata={this.state.dollartree} /></th>
          </tr>

          <tr>
            <th>Dominos Pizza</th>
            <th>DPZ</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="dominos" />
            </th>
            <th><RateBar ratingdata={this.state.dominos} /></th>
          </tr>

          <tr>
            <th>Ebay</th>
            <th>EBAY</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="ebay" />
            </th>
            <th><RateBar ratingdata={this.state.ebay} /></th>
          </tr>

          <tr>
            <th>Callaway Golf</th>
            <th>ELY</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="callaway" />
            </th>
            <th><RateBar ratingdata={this.state.callaway} /></th>
          </tr>

          <tr>
            <th>Ford</th>
            <th>F</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="ford" />
            </th>
            <th><RateBar ratingdata={this.state.ford} /></th>
          </tr>

          <tr>
            <th>Fastly</th>
            <th>FSLY</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="fastly" />
            </th>
            <th><RateBar ratingdata={this.state.fastly} /></th>
          </tr>

          <tr>
            <th>Cedar Fair</th>
            <th>FUN</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="cedarfair" />
            </th>
            <th><RateBar ratingdata={this.state.cedarfair} /></th>
          </tr>

          <tr>
            <th>General Motors</th>
            <th>GM</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="generalmotors" />
            </th>
            <th><RateBar ratingdata={this.state.generalmotors} /></th>
          </tr>

          <tr>
            <th>Acushnet</th>
            <th>GOLF</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="acushnet" />
            </th>
            <th><RateBar ratingdata={this.state.acushnet} /></th>
          </tr>

          <tr>
            <th>Alphabet</th>
            <th>GOOG</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="alphabet" />
            </th>
            <th><RateBar ratingdata={this.state.alphabet} /></th>
          </tr>

          <tr>
            <th>Gap</th>
            <th>GPS</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="gap" />
            </th>
            <th><RateBar ratingdata={this.state.gap} /></th>
          </tr>

          <tr>
            <th>Hertz</th>
            <th>HTZ</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="hertz" />
            </th>
            <th><RateBar ratingdata={this.state.hertz} /></th>
          </tr>

          <tr>
            <th>IMAX</th>
            <th>IMAX</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="imax" />
            </th>
            <th><RateBar ratingdata={this.state.imax} /></th>
          </tr>

          <tr>
            <th>Jumia Technologies</th>
            <th>JMIA</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="jumia" />
            </th>
            <th><RateBar ratingdata={this.state.jumia} /></th>
          </tr>

          <tr>
            <th>JPMorgan Chase</th>
            <th>JPM</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="jpmorgan" />
            </th>
            <th><RateBar ratingdata={this.state.jpmorgan} /></th>
          </tr>

          <tr>
            <th>Coca-Cola</th>
            <th>KO</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="coke" />
            </th>
            <th><RateBar ratingdata={this.state.coke} /></th>
          </tr>

          <tr>
            <th>Kodak</th>
            <th>KODK</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="kodak" />
            </th>
            <th><RateBar ratingdata={this.state.kodak} /></th>
          </tr>

          <tr>
            <th>Carmax</th>
            <th>KMX</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="carmax" />
            </th>
            <th><RateBar ratingdata={this.state.carmax} /></th>
          </tr>

          <tr>
            <th>Lululemon</th>
            <th>LULU</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="lululemon" />
            </th>
            <th><RateBar ratingdata={this.state.lululemon} /></th>
          </tr>

          <tr>
            <th>Lyft</th>
            <th>LYFT</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="lyft" />
            </th>
            <th><RateBar ratingdata={this.state.lyft} /></th>
          </tr>

          <tr>
            <th>Macy's</th>
            <th>M</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="macys" />
            </th>
            <th><RateBar ratingdata={this.state.macys} /></th>
          </tr>

          <tr>
            <th>McDonald's</th>
            <th>MCD</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="mcdonalds" />
            </th>
            <th><RateBar ratingdata={this.state.mcdonalds} /></th>
          </tr>

          <tr>
            <th>Moderna</th>
            <th>MRNA</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="moderna" />
            </th>
            <th><RateBar ratingdata={this.state.moderna} /></th>
          </tr>

          <tr>
            <th>Morgan Stanley</th>
            <th>MS</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="morganstanley" />
            </th>
            <th><RateBar ratingdata={this.state.morganstanley} /></th>
          </tr>

          <tr>
            <th>Microsoft</th>
            <th>MSFT</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="microsoft" />
            </th>
            <th><RateBar ratingdata={this.state.microsoft} /></th>
          </tr>

          <tr>
            <th>Norwegian Cruise Line</th>
            <th>NCLH</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="norwegiancruiseline" />
            </th>
            <th><RateBar ratingdata={this.state.norwegiancruiseline} /></th>
          </tr>

          <tr>
            <th>Nio</th>
            <th>NIO</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="nio" />
            </th>
            <th><RateBar ratingdata={this.state.nio} /></th>
          </tr>

          <tr>
            <th>Nike</th>
            <th>NKE</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="nike" />
            </th>
            <th><RateBar ratingdata={this.state.nike} /></th>
          </tr>

          <tr>
            <th>Northern Trust</th>
            <th>NTRS</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="northerntrust" />
            </th>
            <th><RateBar ratingdata={this.state.northerntrust} /></th>
          </tr>

          <tr>
            <th>Nvidia</th>
            <th>NVDA</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="nvidia" />
            </th>
            <th><RateBar ratingdata={this.state.nvidia} /></th>
          </tr>

          <tr>
            <th>Organigram</th>
            <th>OGI</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="organigram" />
            </th>
            <th><RateBar ratingdata={this.state.organigram} /></th>
          </tr>

          <tr>
            <th>Occidental Petroleum</th>
            <th>OXY</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="occidentalpetroleum" />
            </th>
            <th><RateBar ratingdata={this.state.occidentalpetroleum} /></th>
          </tr>

          <tr>
            <th>Penn National Gaming</th>
            <th>PENN</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="pennnationalgaming" />
            </th>
            <th><RateBar ratingdata={this.state.pennnationalgaming} /></th>
          </tr>

          <tr>
            <th>Pepsico</th>
            <th>PEP</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="pepsico" />
            </th>
            <th><RateBar ratingdata={this.state.pepsico} /></th>
          </tr>

          <tr>
            <th>Procter and Gamble</th>
            <th>PG</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="procterandgamble" />
            </th>
            <th><RateBar ratingdata={this.state.procterandgamble} /></th>
          </tr>

          <tr>
            <th>Paypal</th>
            <th>PYPL</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="paypal" />
            </th>
            <th><RateBar ratingdata={this.state.paypal} /></th>
          </tr>

          <tr>
            <th>Royal Caribbean</th>
            <th>RCL</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="royalcaribbean" />
            </th>
            <th><RateBar ratingdata={this.state.royalcaribbean} /></th>
          </tr>

          <tr>
            <th>Ruger Firearms</th>
            <th>RGR</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="ruger" />
            </th>
            <th><RateBar ratingdata={this.state.ruger} /></th>
          </tr>

          <tr>
            <th>Rocket Companies</th>
            <th>RKT</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="rocketcompanies" />
            </th>
            <th><RateBar ratingdata={this.state.rocketcompanies} /></th>
          </tr>

          <tr>
            <th>Roku</th>
            <th>ROKU</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="roku" />
            </th>
            <th><RateBar ratingdata={this.state.roku} /></th>
          </tr>

          <tr>
            <th>Spirit Airlines</th>
            <th>SAVE</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="spirit" />
            </th>
            <th><RateBar ratingdata={this.state.spirit} /></th>
          </tr>

          <tr>
            <th>Starbucks</th>
            <th>SBUX</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="starbucks" />
            </th>
            <th><RateBar ratingdata={this.state.starbucks} /></th>
          </tr>

          <tr>
            <th>Shake Shack</th>
            <th>SHAK</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="shakeshack" />
            </th>
            <th><RateBar ratingdata={this.state.shakeshack} /></th>
          </tr>

          <tr>
            <th>Shopify</th>
            <th>SHOP</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="shopify" />
            </th>
            <th><RateBar ratingdata={this.state.shopify} /></th>
          </tr>

          <tr>
            <th>Spotify</th>
            <th>SPOT</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="spotify" />
            </th>
            <th><RateBar ratingdata={this.state.spotify} /></th>
          </tr>

          <tr>
            <th>Square</th>
            <th>SQ</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="square" />
            </th>
            <th><RateBar ratingdata={this.state.square} /></th>
          </tr>

          <tr>
            <th>Target</th>
            <th>TGT</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="target" />
            </th>
            <th><RateBar ratingdata={this.state.target} /></th>
          </tr>

          <tr>
            <th>Tesla</th>
            <th>TSLA</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="tesla" />
            </th>
            <th><RateBar ratingdata={this.state.tesla} /></th>
          </tr>

          <tr>
            <th>Twilio</th>
            <th>TWLO</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="twilio" />
            </th>
            <th><RateBar ratingdata={this.state.twilio} /></th>
          </tr>

          <tr>
            <th>Uber</th>
            <th>UBER</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="uber" />
            </th>
            <th><RateBar ratingdata={this.state.uber} /></th>
          </tr>

          <tr>
            <th>Wayfair</th>
            <th>W</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="wayfair" />
            </th>
            <th><RateBar ratingdata={this.state.wayfair} /></th>
          </tr>

          <tr>
            <th>Walmart</th>
            <th>WMT</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="walmart" />
            </th>
            <th><RateBar ratingdata={this.state.walmart} /></th>
          </tr>

          <tr>
            <th>Slack</th>
            <th>WORK</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="slack" />
            </th>
            <th><RateBar ratingdata={this.state.slack} /></th>
          </tr>

          <tr>
            <th>Zillow</th>
            <th>ZG</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="zillow" />
            </th>
            <th><RateBar ratingdata={this.state.zillow} /></th>
          </tr>

          <tr>
            <th>Zoom</th>
            <th>ZM</th>
            <th>
              <Buttons updateStateValues={this.updateStateValues} company="zoom" />
            </th>
            <th><RateBar ratingdata={this.state.zoom} /></th>
          </tr> */}



        </table>
      </div>
      
    );

   
  }
 

}



export default DataTable;