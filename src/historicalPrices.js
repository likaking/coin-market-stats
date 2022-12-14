import React, {Suspense, useState,useEffect,useRef,useLayoutEffect} from 'react';
import axios from 'axios'





export const FetchHistoricalPrices = ({coinSym,setCoinSym,historicalDate,setHistoricalDate,processHistoricalPrices,setProcessHistoricalPrices,

currency,switchHeader,setSwitchHeader,hPrices,setHPrices,activeCoins,setActiveCoins,hPerror,setHpError,loadingStats,setLoadingStats,currencySymbolDisplay,setCurrencySymbolDisplay,
currencySymbol,setCurrencySymbol})=>{

const showHPerror =  (msg)=>{
var errrMsg  = msg.map((err)=>{ return err.message})
//var fixMsg = errrMsg.includes('Network Error') ? 'Network Error' : errrMsg.includes('Request failed with status code 404') ? 'Coin not found' : 'Error!'
setHpError(errrMsg)	
}

var url = `https://api.coingecko.com/api/v3/coins/${coinSym}/history?date=${historicalDate}`
useEffect(()=>{

switchHeader && axios.get(url).then((res)=>{setHPrices([res.data])}).then(()=>setLoadingStats('')).then(()=> setCurrencySymbolDisplay(currencySymbol)).catch((err)=>{setHpError('Coin not found | Type coin name & date');setLoadingStats('')})

},[processHistoricalPrices,currency])

}