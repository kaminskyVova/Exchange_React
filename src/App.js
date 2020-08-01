import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div>
        <h2>Exchange</h2>
        <label>From: 
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="SHEK">SHEKEL</option>
          </select>
        </label>
        <input></input><br/>
        <label>To: 
          <select>
            <option value="U">USD</option>
            <option value="E">EUR</option>
            <option value="S">SHEKEL</option>
          </select>
        </label>
        <button>Start</button>
        <div>
          <button>Update</button>
          <button>Share on FACEBOOK</button>
          <button>View exchange list</button>
        </div>
      </div>
      <hr />

      <div>
        <p>#1</p>
        <p>From Dollar To Shekel</p>
        <p>1 = 4</p>
        <button>x</button>
      </div>
      <hr />

      <div>
        <p>#2</p>
        <p>From Euro To Shekel</p>
        <p>2 = 9.5</p>
        <button>x</button>
      </div>
      <hr />

      <div>
        <h2>Update</h2>

        <div style={{width: 300, display: 'flex', margin: 'auto', paddingLeft: 150}}>
          <div style={{marginRight: 50}}>
            <h3>Type</h3>
            <p>Dollar</p>
            <p>Euro</p>
            <p>Shekel</p>
          </div>
          <div>
            <h3>Value</h3>
            <p>4</p>
            <p>5</p>
            <p>1</p>
          </div>
        </div>

        <label>Type
          <input></input><br/>
        </label>
        <label>New Value
          <input></input><br />
        </label>

        <button>Back</button>
        <button>Update</button>
      </div>
      <hr />

    </div>
  );
}

export default App;
