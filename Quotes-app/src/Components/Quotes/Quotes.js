import React, { useState } from "react";
import axios from 'axios';
import './Quotes.css'

function Quotes() {
  const[quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res.data.content)
      setQuote(res.data.content)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{quote}</h1>
        <button className="button" onClick={getQuote}>
          <span>get Quote</span>
        </button>
      </div>
    </div>
  );
}

export default Quotes;
