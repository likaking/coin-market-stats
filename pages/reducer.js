import React, {Suspense} from 'react';
import { useState,useEffect,useRef } from 'react';


import { useReducer } from "react";


const initialTodos =  [
    {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":193680.32,"market_cap":371074048905,"market_cap_rank":1,"fully_diluted_valuation":406734771812,"total_volume":35265134033,"high_24h":19475.03,"low_24h":18641.21,"price_change_24h":-42.92339586948219,"price_change_percentage_24h":-0.22113,"market_cap_change_24h":-804856389.1931763,"market_cap_change_percentage_24h":-0.21643,"circulating_supply":19158812.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-71.92872,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":28482.85436,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2022-09-23T23:41:24.232Z"},
  
    {"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880","current_price":1333.12,"market_cap":160913745643,"market_cap_rank":2,"fully_diluted_valuation":null,"total_volume":17611631455,"high_24h":1355.04,"low_24h":1272.94,"price_change_24h":2.78,"price_change_percentage_24h":0.20921,"market_cap_change_24h":680084121,"market_cap_change_percentage_24h":0.42443,"circulating_supply":120649326.21125,"total_supply":120648876.21125,"max_supply":null,"ath":4878.26,"ath_change_percentage":-72.65968,"ath_date":"2021-11-10T14:24:19.604Z","atl":0.432979,"atl_change_percentage":307936.23918,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":91.04801061018243,"currency":"btc","percentage":9104.801061018243},"last_updated":"2022-09-23T23:40:57.294Z"},
    
    {"id":"tether","symbol":"usdt","name":"Tether","image":"https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707","current_price":1.001,"market_cap":67993636442,"market_cap_rank":3,"fully_diluted_valuation":null,"total_volume":46332674774,"high_24h":1.006,"low_24h":0.995976,"price_change_24h":0.00181249,"price_change_percentage_24h":0.18138,"market_cap_change_24h":2831925,"market_cap_change_percentage_24h":0.00417,"circulating_supply":67954703168.0175,"total_supply":67954703168.0175,"max_supply":null,"ath":1.32,"ath_change_percentage":-24.37635,"ath_date":"2018-07-24T00:00:00.000Z","atl":0.572521,"atl_change_percentage":74.76615,"atl_date":"2015-03-02T00:00:00.000Z","roi":null,"last_updated":"2022-09-23T23:41:00.330Z"},
    
    

];


const initialState =  [{"id":"bitcoin","symbol":"btc","name":"Bitcoin"},{"id":"bitcoin","symbol":"btc","name":"Bitcoin"}];

export function reducer(state, action) {
  switch (action.type) {
    case 'increment':
        
        var cc = 'de race'
        console.log(state)
        console.log(state.length)
   return  state.map((n)=>{
    if(n.id !== 'bitcoin'){
      console.log(1)
    }
   
   
})
  
    case 'decrement':
        console.log(state)
      return {id: state.id + 'c'};
    default:
      
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}