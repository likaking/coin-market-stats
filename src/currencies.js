import React, {Suspense, useState,useEffect,useRef} from 'react';
import Home from '../pages/index.js'
import {data1,Speech} from '../pages/index.js'
import axios from 'axios'
import styles from '../styles/Currencies.module.css'
import {FaTrashAlt} from 'react-icons/fa'
import {currencyArray} from '../src/currenciesData.js'
import {FaCheck, FaCheckCircle, FaCheckSquare, FaRegCheckCircle} from 'react-icons/fa'
import Link from "next/link"



export function Currencies({currency, setCurrency,currencyPlural,setCurrencyPlural,speech,runOrStop,setRunOrStop,setFinalComp,finalComp,coinArr,
setCoinArr,setQuickData,quickData,currencySingular,setCurrencySingular,currencySymbol,setCurrencySymbol,hPerror,setHpError,changingCurrency,setChangingCurrency}){
const [changeCurrency,setChangeCurrency] = useState(' ')
const [symbolNative,setSymbolNative] = useState('$')
const changexy = useRef(null)
 
let xyArray =  currencyArray.filter((c)=>{
return c.code.includes(changeCurrency) 
})

const changeCurrCurrency = (sym,name,currCode,plural)=>{
changexy.current.value = ''; 
changexy.current.value += sym + ' ' + name;
setChangeCurrency(' '); 
setSymbolNative(sym);
setCurrency(currCode);
setCurrencySingular(name);
setCurrencyPlural(plural);
setCurrencySymbol(sym);
setHpError(' ');
setChangingCurrency(`Please wait! Switching to  ${name} (${sym}) ......`)
}





return(
<>
<div className = {styles.CMVCurrencies}>
<div className = {styles.CMVCurrencies_main}>
<div className = {styles.CMVCurrencies_changeCurrency}>
<input type = 'text' placeholder='eg Euro'  className = {styles.CMVCurrencies_input} onChange = {(text)=>{setChangeCurrency(text.target.value.toLocaleUpperCase())}}  ref={changexy} />
<div className = {styles.CMVCurrencies_currentCurrency}><p>{symbolNative}{'  '}{currency} </p><span><FaRegCheckCircle  className = {styles.CMVCurrencies_check}/></span></div>
</div>
<div  className = {styles.CMVCurrencies_currencyInfo} >
 <div>
 {
changexy.current? changexy.current.value !== '' && xyArray.map((xy,index)=> 
index < 1 && <div key = {xy.symbol+index} className = {styles.CMVCurrencies_currencylist} 
 onClick = {()=>{changeCurrCurrency(xy.symbol,xy.name,xy.code,xy.name_plural)}}><span>{xy.symbol}</span>{'  '}<span>{xy.name}</span></div>)
: ''}
</div>   
</div>
</div>
</div>
{/*<h4  className = {styles.CMVCurrencies_LS}><Link href='/localstorage'>Use With Local Storage</Link></h4>*/}
</>
)
}


