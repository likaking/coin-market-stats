import React, {Suspense, useState,useEffect,useRef} from 'react';
import styles from '../styles/Home.module.css'
import Home from '../pages/index.js'
import {data1} from '../pages/index.js'
import axios from 'axios'


//"bitcoin","ethereum","binancecoin","ripple"
//export const buy = []
/*
export const  activeCoins = [
    {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":193680.32,"market_cap":371074048905,"market_cap_rank":1,"fully_diluted_valuation":406734771812,"total_volume":35265134033,"high_24h":19475.03,"low_24h":18641.21,"price_change_24h":-42.92339586948219,"price_change_percentage_24h":-0.22113,"market_cap_change_24h":-804856389.1931763,"market_cap_change_percentage_24h":-0.21643,"circulating_supply":19158812.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-71.92872,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":28482.85436,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2022-09-23T23:41:24.232Z"},
    {"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880","current_price":1333.12,"market_cap":160913745643,"market_cap_rank":2,"fully_diluted_valuation":null,"total_volume":17611631455,"high_24h":1355.04,"low_24h":1272.94,"price_change_24h":2.78,"price_change_percentage_24h":0.20921,"market_cap_change_24h":680084121,"market_cap_change_percentage_24h":0.42443,"circulating_supply":120649326.21125,"total_supply":120648876.21125,"max_supply":null,"ath":4878.26,"ath_change_percentage":-72.65968,"ath_date":"2021-11-10T14:24:19.604Z","atl":0.432979,"atl_change_percentage":307936.23918,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":91.04801061018243,"currency":"btc","percentage":9104.801061018243},"last_updated":"2022-09-23T23:40:57.294Z"},

  
  ]
  */
  

export function AddCrypto({activeCoins,buy,setBuy,setActiveCoins,currency,speech,quickData,setQuickData,setCoinArr,setRunOrStop}){
const [coinAlreadyExistError,setCoinAlreadyExistError] = useState('')
const coinIsExitingErr = useRef(null)
const [addNewCoin, setAddNewCoin] = useState('')
const [addNewCoinData, setAddNewCoinData] = useState('')
const [currencyxe, setCurrencyxe] = useState('usd')
const addCoinError = useRef(null)
const addCoinInput = useRef(null)
const netWorkErr = useRef(null)



const addCoin = (coin)=>{
    var coin_Lcase = coin.id.toLowerCase()
    var ansa = activeCoins.find((coinName)=>{return coinName.id === coin_Lcase })
    if(ansa === undefined && buy.indexOf(coin.id) === -1){
    setActiveCoins([...activeCoins,coin]);
    setBuy([...buy,coin.id]);
    ()=>{Speech.cancel()}
    setCoinArr([])
    setQuickData(true);
    setRunOrStop(false)
    }
    else{
    coinIsExitingErr.current.style.display = 'block'
    return false
    }
    }

    const showNetWorkErr = ()=>{
      netWorkErr.current.style.display = 'block'
    }
    const hideNetWorkErr = ()=>{
      netWorkErr.current.style.display = 'none'
    }
    
    const grab = (e)=>{
      
        e.preventDefault()
        
        hideShowAddCoinErr();
        if(addCoinInput.current.value === ''){
          setAddNewCoin('')
          setAddNewCoinData([])
          addCoinError.current.style.display = 'block'
          return false
        }
        
        else{
        const grabUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&symbols=${addNewCoin}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
      
        axios.get(grabUrl).then((res)=>{setAddNewCoinData([...res.data])}).catch((err)=>{showNetWorkErr()})
        }
       
       }

       const hideShowAddCoinErr = ()=>{
        if(addNewCoin){
        if(addCoinInput.current.value.length > 0 ){
          addCoinError.current.style.display = 'none'
        }
        }
        }

       const hideAddCoinErr = ()=>{
          addCoinError.current.style.display = 'none'
        }
    
  

return(
<>
<div className={styles.main_cmv_contianer}>
  <div className={styles.cmv_device_contianer}>
  <div className={styles.cmv_device_inputnBtn_container}>
  <form onSubmit={grab}>
  <input placeholder = 'Add a new coin eg: doge' type= 'text' name = 'addCoin' className={styles.cmv_device_input} value = {addNewCoin} ref = {addCoinInput} onChange = {(e)=>{setAddNewCoin(e.target.value.toLocaleLowerCase())}}  onFocus = {()=> {coinIsExitingErr.current.style.display = 'block'? coinIsExitingErr.current.style.display = 'none' : ''; addCoinError.current.style.display = 'block'? addCoinError.current.style.display = 'none' : '';hideNetWorkErr()}}/>
  <input className={styles.cmv_device_grabBtn} type='submit' value={'Grab'} onClick = {hideNetWorkErr}  />
  </form>
  </div>
  <div style={{cursor:'pointer'}}>
 {
  addNewCoinData.length > 0 && addCoinInput.current.value !== '' && addNewCoinData.map((coin,i) =>
   i < 1 &&
    <div key = {coin.id+i} className={styles.cmv_device_addCoinResult} onClick = {()=>{addCoin({id:coin.id,symbol:coin.symbol,name:coin.name,image:coin.image});setAddNewCoinData([])}}><img src = {coin.image} key = {coin.image+i}  className={styles.cmv_device_result_img}/><div key = {coin.name+i}>{coin.name}</div><div className={styles.cmv_device_addCoinResult_click} >click 2 add</div></div>
    )
 }

 </div>
  <div className={styles.cmv_device_grabBtn_errorContainer} ref = {addCoinError}>
  <p className={styles.cmv_device_grabBtn_error} >Please add a text to the input field</p>
  </div>
  <div className={styles.cmv_device_grabBtn_coinsExisterror} ref = {coinIsExitingErr}>
<p className={styles.cmv_device_grabBtn_error} >This crypto has already been added</p>
</div>

<div className={styles.cmv_device_grabBtn_coinsExisterror} ref = {netWorkErr}>
<p className={styles.cmv_device_grabBtn_error} >Can't fetch data</p>
</div>
  </div>
  </div>

</>
)

}