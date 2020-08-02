import React, { Component } from 'react';

class Exchange extends Component {
  constructor(props){
    super(props)
    this.state = {
      money: [
        {type: 'USD', value: 1.5},
        {type: 'EUR', value: 1},
        {type: 'ILS', value: 3.5}
      ],
      exchResult: [{}]
    }   
  }


  render() {
    return (
      <div>
        <h2>Exchange</h2>
        <label>From: 
          <select>
            <option value="USD">Dollar</option>
            <option value="EUR">Euro</option>
            <option value="ILS">Shekel</option>
          </select>
        </label>
        <input></input><br/>
        <label>To: 
          <select>
            <option value="USD">Dollar</option>
            <option value="EUR">Euro</option>
            <option value="ILS">Shekel</option>
          </select>
        </label>
        <button>Start</button>
        <div>
          <button>Update</button>
          <button>Share on FACEBOOK</button>
          <button>View exchange list</button>
        </div>
      </div>
    );
  }
}

export default Exchange;
