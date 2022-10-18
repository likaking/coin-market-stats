import React, {Suspense} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaBars} from 'react-icons/fa'
import {FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaCopyright, FaArrowUp, FaArrowRight, FaUserFriends,FaShoppingBasket,FaHamburger} from 'react-icons/fa'
import { useState,useEffect,useRef } from 'react';
import Speech from 'speak-tts'
import axios from 'axios'
import converter from 'number-to-words'
import { ToWords } from 'to-words';
import Header from './header/header.js';
import { useReducer } from "react";
import {addCoin,buy,activeCoins,AddCrypto,coinIsexistinErr} from '../src/addcoin.js'
import {DisplayCoin} from '../src/removecoin.js'
import {CMVControls} from '../src/cmvcontrolbuttons.js'
import {Currencies} from '../src/currencies.js'
import {UseCases} from '../src/useCases.js'

//import Footerx from './footer/footer.js';





const Footer = React.lazy(()=> import('./footer/footer.js'))
/*
let coinNews = [
  {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":193680.32,"market_cap":371074048905,"market_cap_rank":1,"fully_diluted_valuation":406734771812,"total_volume":35265134033,"high_24h":19475.03,"low_24h":18641.21,"price_change_24h":-42.92339586948219,"price_change_percentage_24h":-0.22113,"market_cap_change_24h":-804856389.1931763,"market_cap_change_percentage_24h":-0.21643,"circulating_supply":19158812.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-71.92872,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":28482.85436,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2022-09-23T23:41:24.232Z"},

  {"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880","current_price":1333.12,"market_cap":160913745643,"market_cap_rank":2,"fully_diluted_valuation":null,"total_volume":17611631455,"high_24h":1355.04,"low_24h":1272.94,"price_change_24h":2.78,"price_change_percentage_24h":0.20921,"market_cap_change_24h":680084121,"market_cap_change_percentage_24h":0.42443,"circulating_supply":120649326.21125,"total_supply":120648876.21125,"max_supply":null,"ath":4878.26,"ath_change_percentage":-72.65968,"ath_date":"2021-11-10T14:24:19.604Z","atl":0.432979,"atl_change_percentage":307936.23918,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":91.04801061018243,"currency":"btc","percentage":9104.801061018243},"last_updated":"2022-09-23T23:40:57.294Z"},
  
  {"id":"tether","symbol":"usdt","name":"Tether","image":"https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707","current_price":1.001,"market_cap":67993636442,"market_cap_rank":3,"fully_diluted_valuation":null,"total_volume":46332674774,"high_24h":1.006,"low_24h":0.995976,"price_change_24h":0.00181249,"price_change_percentage_24h":0.18138,"market_cap_change_24h":2831925,"market_cap_change_percentage_24h":0.00417,"circulating_supply":67954703168.0175,"total_supply":67954703168.0175,"max_supply":null,"ath":1.32,"ath_change_percentage":-24.37635,"ath_date":"2018-07-24T00:00:00.000Z","atl":0.572521,"atl_change_percentage":74.76615,"atl_date":"2015-03-02T00:00:00.000Z","roi":null,"last_updated":"2022-09-23T23:41:00.330Z"},
  
  {"id":"usd-coin","symbol":"usdc","name":"USD Coin","image":"https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389","current_price":1.001,"market_cap":49836686133,"market_cap_rank":4,"fully_diluted_valuation":null,"total_volume":4957089289,"high_24h":1.007,"low_24h":0.995665,"price_change_24h":0.0021015,"price_change_percentage_24h":0.21029,"market_cap_change_24h":-49308086.83721924,"market_cap_change_percentage_24h":-0.09884,"circulating_supply":49742157025.0699,"total_supply":49742156307.4625,"max_supply":null,"ath":1.17,"ath_change_percentage":-14.77626,"ath_date":"2019-05-08T00:40:28.300Z","atl":0.891848,"atl_change_percentage":12.06215,"atl_date":"2021-05-19T13:14:05.611Z","roi":null,"last_updated":"2022-09-23T23:41:01.138Z"},
  
  {"id":"binancecoin","symbol":"bnb","name":"BNB","image":"https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850","current_price":276.89,"market_cap":45219653297,"market_cap_rank":5,"fully_diluted_valuation":45729182927,"total_volume":752896849,"high_24h":277.59,"low_24h":270.15,"price_change_24h":1.59,"price_change_percentage_24h":0.57799,"market_cap_change_24h":311873075,"market_cap_change_percentage_24h":0.69447,"circulating_supply":163276974.63,"total_supply":163276974.63,"max_supply":165116760.0,"ath":686.31,"ath_change_percentage":-59.64623,"ath_date":"2021-05-10T07:24:17.097Z","atl":0.0398177,"atl_change_percentage":695446.45911,"atl_date":"2017-10-19T00:00:00.000Z","roi":null,"last_updated":"2022-09-23T23:41:30.700Z"},
  
  {"id":"ripple","symbol":"xrp","name":"XRP","image":"https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731","current_price":0.507897,"market_cap":25318052692,"market_cap_rank":6,"fully_diluted_valuation":50789746933,"total_volume":6812657762,"high_24h":0.552859,"low_24h":0.46026,"price_change_24h":0.02647222,"price_change_percentage_24h":5.49872,"market_cap_change_24h":1333886411,"market_cap_change_percentage_24h":5.56153,"circulating_supply":49848747475.0,"total_supply":99989294935.0,"max_supply":100000000000.0,"ath":3.4,"ath_change_percentage":-85.05503,"ath_date":"2018-01-07T00:00:00.000Z","atl":0.00268621,"atl_change_percentage":18807.60962,"atl_date":"2014-05-22T00:00:00.000Z","roi":null,"last_updated":"2022-09-23T23:39:51.441Z"},

  
]
*/


export default function Home(setCmvErrorsx={setCmvErrorsx}) {
  const toWords = new ToWords();
  const [currency, setCurrency] = useState('USD')
  const [currencyPlural,setCurrencyPlural] = useState('US dollars')
  const [currencySingular,setCurrencySingular] = useState('US dollar')
  const [finalComp, setFinalComp] = useState([])   
  const [coinArr, setCoinArr] = useState([])
  var currencyxy  = 'usd'
  const [info, setInfo] = useState(true)
  const [quickData, setQuickData] = useState(false)
  const [runOrStop,setRunOrStop] = useState(false)
  

  

  const  [activeCoins,setActiveCoins]  = useState(
    
  function getStaticProps(){

    if(typeof window !== 'undefined'){
      const saved = JSON.parse(window.localStorage.getItem('allActiveCrypto'))
      return saved
    }
  }
  
  )

  const saveActiveCryptoList = ()=>{
    if(typeof window !== 'undefined'){
     const savedCrptoList = localStorage.setItem("allActiveCrypto", JSON.stringify(activeCoins));
     const savedCryptoList = localStorage.getItem("allActiveCrypto");
     const convertSavedCryptoList = JSON.parse(savedCryptoList);
    
    }
  
    }
   
 useEffect(()=>{
  saveActiveCryptoList()
 },[activeCoins])
 
  const [buy, setBuy]= useState( function getStaticProps(){

    if(typeof window !== 'undefined'){
      const coinlist = JSON.parse(window.localStorage.getItem('cList'))
      return coinlist
    }
  }
      
      ) 


 

 const saveBuyList = ()=>{
  if(typeof window !== 'undefined'){
   const saveBuy = localStorage.setItem("cList", JSON.stringify(buy));

  }

  }
 
useEffect(()=>{
saveBuyList()
},[buy])

  const showCmvErrorsx = (msg)=>{
    cmvErrorsxHolder.current.style.display = 'block';
    setCmvErrorsx(msg)
  }
  
  const hideCmvErrorsx = ()=>{
    setCmvErrorsx('')
    cmvErrorsxHolder.current.style.display = 'none';
    
  }

  
   

  const approvedCurrencies = [
{id:'USD'},
{id:'USD'},
{id:'JPY'},
  ];

const updateCurrenccy = useEffect(()=>{
 const fixCurrency = (currency)=>{
  setCurrency(currency)
 }},[currency])

 
const welcome = (setCmvErrorsx)=>{
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLocaleLowerCase()}&ids=${buy.toString()}
  &order=market_cap_desc&per_page=1&page=1&sparkline=false`
  axios.get(url).then((res)=>{setCoinArr(res.data)}).then(()=>{}).catch((err)=> {console.log(err);()=>setCmvErrorsx('No internet connection')})
  
}


useEffect(()=>{
  welcome ()
  },[]);



let currencryMap = {
  USD:'dollar',
  EUR:'euro',
  JPY:'yen',
  NGN:'naira'

}

const detectStop = ()=>{
if(!runOrStop){
  console.log('I have stoped');
  setFinalComp([]);
  setCoinArr([])
}
else{
  console.log('I am Runing....');
}
}

useEffect(()=>{
  detectStop() 
},[runOrStop])

const detectQuickData = ()=>{
  if(!quickData){
    console.log('Quick Data have stoped');

  }
  else{
    console.log('Quick Data is Runing....');
  }
  }
  
  useEffect(()=>{
    detectQuickData() 
  },[quickData])




const precompArr = []


if(typeof window !== 'undefined'){
  const speech = new Speech() // will throw an exception if not browser supported
 
  if(speech.hasBrowserSupport()) { // returns a boolean
      //console.log("speech synthesis supported")
  }
}

const detectSpeech = ()=>{
()=>console.log(speech.speaking() === true)



}
detectSpeech()

 return(
  <>
  <Head>
        <title>Coin Market Voice</title>
        <meta name="Coin Market Voice" content="Monitor crypto prices via audio" />
        <meta name="keywords" content="Monitor crypto prices via audio,crypto, crypto prices,crypto audio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
  {<Header />}
 
  <main >
  <div className={styles.cmv_top}></div>
  <div className={styles.cmvBody}>
  <div className={styles.banner}>
  <div className={styles.banner_div_L}>
    <h1 className={styles.banner_div_L_hdr}>Monitor Crypto Prices</h1>
    <h1 className={styles.banner_div_L_hdr2}>Via Audio</h1>
    <h4 className={styles.banner_div_L_subhdr}>Latest crypto prices{<br className={styles.responsive_txt_brk} />} in our ears </h4>
    <p className={styles.banner_div_L_P}>Keeping Up With the {<br className={styles.responsive920_txt_brk}/>} latest Crypto Prices Should {<br />} Not  Disrupt Our Lives</p>
    </div>
  <div className={styles.banner_div_R}></div>
  <div className={styles.banner_div_REnd}>
 <img src ={'/bgrndCWitex.png'}   className={styles.banner_div_Img}  style ={{filter:'grayscale(100%'}}/>
 <img src ={'/bgrndCmobilexx.png'}   className={styles.banner_div_ImgM} />
  <div className={styles.banner_div_REnd_rotoDiv}>
  <div className={styles.banner_div_REnd_rotoDiv_item}></div>
  </div>
  </div>
  </div>


  <AddCrypto activeCoins={activeCoins} buy={buy} setBuy={setBuy} setActiveCoins={setActiveCoins} currency={currency} Speech={Speech} quickData={quickData} setQuickData={setQuickData} />

  <DisplayCoin activeCoins={activeCoins} buy={buy} setBuy={setBuy} setActiveCoins={setActiveCoins} Speech={Speech} setQuickData={setQuickData} />

  <CMVControls currencryMap={currencryMap} coinArr={coinArr} activeCoins={activeCoins} finalComp={finalComp}
   setFinalComp={setFinalComp} setCoinArr={setCoinArr} currency={currency} setCurrency={setCurrency}
    buy = {buy} quickData={quickData} setQuickData={setQuickData} runOrStop={runOrStop} 
    setRunOrStop={setRunOrStop} currencySingular={currencySingular} currencyPlural={currencyPlural} />

  <Currencies currency={currency} setCurrency={setCurrency} currencyPlural={currencyPlural} 
  setCurrencyPlural={setCurrencyPlural} speech={Speech} runOrStop={runOrStop} 
  setRunOrStop={setRunOrStop} setFinalComp= {setFinalComp} finalComp={finalComp}
   coinArr={coinArr} setCoinArr={setCoinArr} setQuickData={setQuickData} quickData={quickData}
   currencySingular={currencySingular} setCurrencySingular={setCurrencySingular} />
 
  <Suspense fallback = 'Loadng gallery'>
   <UseCases />
   </ Suspense>

   <Suspense fallback = 'Loadng footer'>
   <Footer />
   </Suspense>
</div>



</main>
  </>
 )
  
  
}


