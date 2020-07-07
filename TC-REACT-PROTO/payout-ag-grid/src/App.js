import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Order ID", field: "id"
      }, {
        headerName: "Item", field: "item"
      }, {
        headerName: "Item Price", field: "price"
      }, {
        headerName: "Total Tickets", field: "total_tickets"
      }, {
        headerName: "Total Redeemed", field: "total_redeemed"
      }, {
        headerName: "Redeemed Date", field: "date"
      }, {
        headerName: "Redeemed By", field: "redeemed_by"
      }, {
        headerName: "Redemption Status", field: "redemption_status"
      }, {
        headerName: "Payment Status", field: "payment_status"
      }, {
        headerName: "Payment Date", field: "pay_date"
      }],
      rowData: [{
        id: "No Data To Show", item: "No Data To Show", price: "No Data To Show", total_tickets: "No Data To Show", total_redeemed: "PanoramaLangkawi", date: "PanoramaLangkawi", redeemed_by: "PanoramaLangkawi", redemption_status: "PanoramaLangkawi", payment_status: "PanoramaLangkawi", item: "PanoramaLangkawi", pay_date: 86
      }, {
        id: "No Data To Show", item: "No Data To Show", price: "PanoramaLangkawi", total_tickets: "PanoramaLangkawi", total_redeemed: "PanoramaLangkawi", date: "PanoramaLangkawi", redeemed_by: "PanoramaLangkawi", redemption_status: "PanoramaLangkawi", payment_status: "PanoramaLangkawi", item: "PanoramaLangkawi", pay_date: 86
      }, {
        id: "No Data To Show", item: "No Data To Show", price: "PanoramaLangkawi", total_tickets: "PanoramaLangkawi", total_redeemed: "PanoramaLangkawi", date: "PanoramaLangkawi", redeemed_by: "PanoramaLangkawi", redemption_status: "PanoramaLangkawi", payment_status: "PanoramaLangkawi", item: "PanoramaLangkawi", pay_date: 86
      }]
    }
  }

  render() {
    return (
      <div
        className="ag-theme-alpine"
        style={{
        height: '250px',
        width: '2000px' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default App;
