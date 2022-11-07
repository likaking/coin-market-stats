import React, {Suspense} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaBars} from 'react-icons/fa'
import {FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaCopyright, FaArrowUp, FaArrowRight, FaUserFriends,FaShoppingBasket,FaHamburger} from 'react-icons/fa'
import { useState,useEffect,useRef } from 'react';
import axios from 'axios'
import Header from './header/header.js';
import { useReducer } from "react";
import {addCoin,buy,activeCoins,AddCrypto,coinIsexistinErr} from '../src/addcoin.js'
import {DisplayCoin} from '../src/removecoin.js'
import {CMVControls} from '../src/cmvcontrolbuttons.js'
import {Currencies} from '../src/currencies.js'
import {UseCases} from '../src/useCases.js'
import UpdateCoinInfo from '../src/updateCoinInfo.js'







const Footer = React.lazy(()=> import('./footer/footer.js'))



export default function Home(setCmvErrorsx={setCmvErrorsx}) {
  const [currency, setCurrency] = useState('USD')
  const [currencyPlural,setCurrencyPlural] = useState('US dollars')
  const [currencySingular,setCurrencySingular] = useState('US dollar')
  const [finalComp, setFinalComp] = useState([])   
  const [coinArr, setCoinArr] = useState([])
  const [info, setInfo] = useState(true)
  const [quickData, setQuickData] = useState(false);
  const [runOrStop,setRunOrStop] = useState(true);
  const [searchGems,setSearchGems] = useState('')

  

  

  const  [activeCoins,setActiveCoins]  = useState(
    [
      {
        "id": "bitcoin-cash",
        "symbol": "bch",
        "name": "Bitcoin Cash",
        "image": "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492",
        "current_price": 124.28,
        "market_cap": 2388022842,
        "market_cap_rank": 33,
        "fully_diluted_valuation": 2609054837,
        "total_volume": 2040624394,
        "high_24h": 125.19,
        "low_24h": 122.89,
        "price_change_24h": 0.817284,
        "price_change_percentage_24h": 0.66197,
        "market_cap_change_24h": 18220323,
        "market_cap_change_percentage_24h": 0.76885,
        "circulating_supply": 19220937.3966509,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 3785.82,
        "ath_change_percentage": -96.71813,
        "ath_date": "2017-12-20T00:00:00.000Z",
        "atl": 76.93,
        "atl_change_percentage": 61.49492,
        "atl_date": "2018-12-16T00:00:00.000Z",
        "roi": null,
        "last_updated": "2022-11-05T22:30:30.181Z",
        "vip":true
      },
      {
        "id": "tezos",
        "symbol": "xtz",
        "name": "Tezos",
        "image": "https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png?1547034862",
        "current_price": 1.45,
        "market_cap": 1316354683,
        "market_cap_rank": 47,
        "fully_diluted_valuation": null,
        "total_volume": 57157763,
        "high_24h": 1.47,
        "low_24h": 1.43,
        "price_change_24h": 0.02117736,
        "price_change_percentage_24h": 1.48455,
        "market_cap_change_24h": 23630324,
        "market_cap_change_percentage_24h": 1.82795,
        "circulating_supply": 907157159.543823,
        "total_supply": null,
        "max_supply": null,
        "ath": 9.12,
        "ath_change_percentage": -84.08124,
        "ath_date": "2021-10-04T00:41:18.025Z",
        "atl": 0.350476,
        "atl_change_percentage": 314.05517,
        "atl_date": "2018-12-07T00:00:00.000Z",
        "roi": {
          "times": 2.0801935605371806,
          "currency": "usd",
          "percentage": 208.0193560537181
        },
        "last_updated": "2022-11-05T22:31:17.993Z",
        "vip":true
      },
      {
        "id": "eos",
        "symbol": "eos",
        "name": "EOS",
        "image": "https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481",
        "current_price": 1.18,
        "market_cap": 1193683615,
        "market_cap_rank": 52,
        "fully_diluted_valuation": null,
        "total_volume": 247415515,
        "high_24h": 1.21,
        "low_24h": 1.18,
        "price_change_24h": -0.017633123797372363,
        "price_change_percentage_24h": -1.47378,
        "market_cap_change_24h": -16403108.934966087,
        "market_cap_change_percentage_24h": -1.35553,
        "circulating_supply": 1014258230.9114,
        "total_supply": null,
        "max_supply": null,
        "ath": 22.71,
        "ath_change_percentage": -94.81967,
        "ath_date": "2018-04-29T07:50:33.540Z",
        "atl": 0.5024,
        "atl_change_percentage": 134.17987,
        "atl_date": "2017-10-23T00:00:00.000Z",
        "roi": {
          "times": 0.19072813928015456,
          "currency": "usd",
          "percentage": 19.072813928015453
        },
        "last_updated": "2022-11-05T22:31:34.385Z",
        "vip":false
      },
      {
        "id": "aptos",
        "symbol": "apt",
        "name": "Aptos",
        "image": "https://assets.coingecko.com/coins/images/26455/large/aptos_round.png?1666839629",
        "current_price": 7.81,
        "market_cap": 1014615123,
        "market_cap_rank": 56,
        "fully_diluted_valuation": 7812035168,
        "total_volume": 500325062,
        "high_24h": 7.97,
        "low_24h": 7.54,
        "price_change_24h": 0.221271,
        "price_change_percentage_24h": 2.91646,
        "market_cap_change_24h": 26812041,
        "market_cap_change_percentage_24h": 2.71431,
        "circulating_supply": 130000000,
        "total_supply": 1000935772.48,
        "max_supply": null,
        "ath": 13.73,
        "ath_change_percentage": -43.1181,
        "ath_date": "2022-10-19T01:03:53.771Z",
        "atl": 6.73,
        "atl_change_percentage": 16.01609,
        "atl_date": "2022-10-19T03:53:04.558Z",
        "roi": null,
        "last_updated": "2022-11-05T22:31:32.315Z",
        "vip":false
      },
      {
        "id": "gods-unchained",
        "symbol": "gods",
        "name": "Gods Unchained",
        "image": "https://assets.coingecko.com/coins/images/17139/large/10631.png?1635718182",
        "current_price": 0.346495,
        "market_cap": 49235050,
        "market_cap_rank": 438,
        "fully_diluted_valuation": 173692173,
        "total_volume": 3491227,
        "high_24h": 0.353133,
        "low_24h": 0.336071,
        "price_change_24h": 0.00252238,
        "price_change_percentage_24h": 0.73331,
        "market_cap_change_24h": 339304,
        "market_cap_change_percentage_24h": 0.69393,
        "circulating_supply": 141730768,
        "total_supply": 500000000,
        "max_supply": 500000000,
        "ath": 8.8,
        "ath_change_percentage": -96.05896,
        "ath_date": "2021-12-10T21:07:56.477Z",
        "atl": 0.236287,
        "atl_change_percentage": 46.7698,
        "atl_date": "2022-05-12T08:39:30.181Z",
        "roi": null,
        "last_updated": "2022-11-05T22:31:31.556Z",
        "vip":false
      },
      {
        "id": "jasmycoin",
        "symbol": "jasmy",
        "name": "JasmyCoin",
        "image": "https://assets.coingecko.com/coins/images/13876/large/JASMY200x200.jpg?1612473259",
        "current_price": 0.00604293,
        "market_cap": 28690999,
        "market_cap_rank": 594,
        "fully_diluted_valuation": null,
        "total_volume": 123529524,
        "high_24h": 0.00627352,
        "low_24h": 0.00587206,
        "price_change_24h": 0.00001031,
        "price_change_percentage_24h": 0.17088,
        "market_cap_change_24h": 61499,
        "market_cap_change_percentage_24h": 0.21481,
        "circulating_supply": 4754930780,
        "total_supply": 50000000000,
        "max_supply": null,
        "ath": 4.79,
        "ath_change_percentage": -99.87401,
        "ath_date": "2021-02-16T03:53:32.207Z",
        "atl": 0.00420263,
        "atl_change_percentage": 43.60141,
        "atl_date": "2022-10-23T01:09:15.249Z",
        "roi": null,
        "last_updated": "2022-11-05T22:31:32.891Z",
        "vip":false
      },
      {
        "id": "derace",
        "symbol": "derc",
        "name": "DeRace",
        "image": "https://assets.coingecko.com/coins/images/17438/large/DERC_logo_coingecko.png?1665714278",
        "current_price": 0.202438,
        "market_cap": 15747284,
        "market_cap_rank": 768,
        "fully_diluted_valuation": 24273270,
        "total_volume": 464648,
        "high_24h": 0.208466,
        "low_24h": 0.199204,
        "price_change_24h": -0.00089102505175484,
        "price_change_percentage_24h": -0.43822,
        "market_cap_change_24h": -58402.91725002602,
        "market_cap_change_percentage_24h": -0.36951,
        "circulating_supply": 77850000,
        "total_supply": 120000000,
        "max_supply": 120000000,
        "ath": 8.24,
        "ath_change_percentage": -97.54292,
        "ath_date": "2021-11-25T23:04:24.757Z",
        "atl": 0.181467,
        "atl_change_percentage": 11.581,
        "atl_date": "2022-11-01T14:29:30.602Z",
        "roi": null,
        "last_updated": "2022-11-05T22:31:26.319Z",
        "vip":false
      },
      {
        "id": "cryptoblades",
        "symbol": "skill",
        "name": "CryptoBlades",
        "image": "https://assets.coingecko.com/coins/images/15334/large/cryptoblade.PNG?1620596874",
        "current_price": 1.58,
        "market_cap": 1578657,
        "market_cap_rank": 1757,
        "fully_diluted_valuation": null,
        "total_volume": 733909,
        "high_24h": 1.66,
        "low_24h": 1.56,
        "price_change_24h": -0.04867545365416892,
        "price_change_percentage_24h": -2.98581,
        "market_cap_change_24h": -41232.64389418019,
        "market_cap_change_percentage_24h": -2.5454,
        "circulating_supply": 1000000,
        "total_supply": 1000000,
        "max_supply": null,
        "ath": 184.46,
        "ath_change_percentage": -99.14274,
        "ath_date": "2021-07-24T04:31:53.859Z",
        "atl": 0.692354,
        "atl_change_percentage": 128.39345,
        "atl_date": "2021-07-04T05:35:51.192Z",
        "roi": null,
        "last_updated": "2022-11-05T22:30:50.341Z",
        "vip":false
      },
      {
        "id": "burger-swap",
        "symbol": "burger",
        "name": "BurgerCities",
        "image": "https://assets.coingecko.com/coins/images/12563/large/burger.png?1600786553",
        "current_price": 0.869836,
        "market_cap": 0,
        "market_cap_rank": null,
        "fully_diluted_valuation": 24332892,
        "total_volume": 5773293,
        "high_24h": 0.894937,
        "low_24h": 0.867242,
        "price_change_24h": -0.00187611574767621,
        "price_change_percentage_24h": -0.21522,
        "market_cap_change_24h": 0,
        "market_cap_change_percentage_24h": 0,
        "circulating_supply": 0,
        "total_supply": 28000000,
        "max_supply": 28000000,
        "ath": 27.57,
        "ath_change_percentage": -96.84745,
        "ath_date": "2021-05-03T01:14:17.638Z",
        "atl": 0.30105,
        "atl_change_percentage": 188.6616,
        "atl_date": "2022-05-12T07:20:44.524Z",
        "roi": null,
        "last_updated": "2022-11-05T22:31:21.823Z",
        "vip":true
      },
      {
        "id": "victoria-vr",
        "symbol": "vr",
        "name": "Victoria VR",
        "image": "https://assets.coingecko.com/coins/images/21178/large/vr.png?1638496975",
        "current_price": 0.01114365,
        "market_cap": 21288464,
        "market_cap_rank": 670,
        "fully_diluted_valuation": null,
        "total_volume": 542485,
        "high_24h": 0.01145637,
        "low_24h": 0.01112355,
        "price_change_24h": -0.000240111523408793,
        "price_change_percentage_24h": -2.10925,
        "market_cap_change_24h": -444894.1330911331,
        "market_cap_change_percentage_24h": -2.04706,
        "circulating_supply": 1909055968,
        "total_supply": 16800000000,
        "max_supply": null,
        "ath": 0.615957,
        "ath_change_percentage": -98.19421,
        "ath_date": "2021-12-10T18:45:35.946Z",
        "atl": 0.01061155,
        "atl_change_percentage": 4.81894,
        "atl_date": "2022-10-25T10:18:45.731Z",
        "roi": null,
        "last_updated": "2022-11-07T15:43:45.791Z"
      },
      {
        "id": "sylo",
        "symbol": "sylo",
        "name": "Sylo",
        "image": "https://assets.coingecko.com/coins/images/6430/large/SYLO.svg?1589527756",
        "current_price": 0.00379656,
        "market_cap": 15835671,
        "market_cap_rank": 763,
        "fully_diluted_valuation": null,
        "total_volume": 5648941,
        "high_24h": 0.00380778,
        "low_24h": 0.00214887,
        "price_change_24h": 0.00164173,
        "price_change_percentage_24h": 76.18798,
        "market_cap_change_24h": 6875007,
        "market_cap_change_percentage_24h": 76.72431,
        "circulating_supply": 4158769592.391,
        "total_supply": 10000000000,
        "max_supply": null,
        "ath": 0.01482212,
        "ath_change_percentage": -74.31044,
        "ath_date": "2021-05-06T09:46:08.483Z",
        "atl": 0.00076816,
        "atl_change_percentage": 395.69698,
        "atl_date": "2021-01-05T00:42:25.527Z",
        "roi": {
          "times": -0.5636132370250097,
          "currency": "usd",
          "percentage": -56.36132370250097
        },
        "last_updated": "2022-11-07T15:44:02.438Z"
      },
      {
        "id": "maps",
        "symbol": "maps",
        "name": "MAPS",
        "image": "https://assets.coingecko.com/coins/images/13556/large/Copy_of_image_%28139%29.png?1609768934",
        "current_price": 0.147049,
        "market_cap": 11032345,
        "market_cap_rank": 872,
        "fully_diluted_valuation": null,
        "total_volume": 412137,
        "high_24h": 0.156414,
        "low_24h": 0.146724,
        "price_change_24h": -0.009024417567141093,
        "price_change_percentage_24h": -5.78216,
        "market_cap_change_24h": -674586.078710556,
        "market_cap_change_percentage_24h": -5.76228,
        "circulating_supply": 75000000,
        "total_supply": 10000000000,
        "max_supply": null,
        "ath": 2,
        "ath_change_percentage": -92.65332,
        "ath_date": "2021-05-03T07:34:26.347Z",
        "atl": 0.089177,
        "atl_change_percentage": 64.85351,
        "atl_date": "2022-01-24T14:06:38.770Z",
        "roi": null,
        "last_updated": "2022-11-07T15:43:37.771Z"
      },
      {
        "id": "pallapay",
        "symbol": "palla",
        "name": "Pallapay",
        "image": "https://assets.coingecko.com/coins/images/16200/large/palla.png?1647095947",
        "current_price": 0.01094608,
        "market_cap": 8311011,
        "market_cap_rank": 971,
        "fully_diluted_valuation": null,
        "total_volume": 55554,
        "high_24h": 0.0110879,
        "low_24h": 0.01084355,
        "price_change_24h": -0.000090623081725022,
        "price_change_percentage_24h": -0.82111,
        "market_cap_change_24h": 1178.48,
        "market_cap_change_percentage_24h": 0.01418,
        "circulating_supply": 759017491,
        "total_supply": 1999999999,
        "max_supply": null,
        "ath": 0.094144,
        "ath_change_percentage": -88.37299,
        "ath_date": "2021-09-05T09:43:30.527Z",
        "atl": 0.00957886,
        "atl_change_percentage": 14.2733,
        "atl_date": "2022-07-19T23:42:16.943Z",
        "roi": null,
        "last_updated": "2022-11-07T15:43:13.877Z"
      },
      {
        "id": "genopets",
        "symbol": "gene",
        "name": "Genopets",
        "image": "https://assets.coingecko.com/coins/images/20360/large/gene-token.png?1636945172",
        "current_price": 2,
        "market_cap": 8056312,
        "market_cap_rank": 984,
        "fully_diluted_valuation": 199689560,
        "total_volume": 977646,
        "high_24h": 2.14,
        "low_24h": 2,
        "price_change_24h": -0.13125668553051928,
        "price_change_percentage_24h": -6.16678,
        "market_cap_change_24h": -532263.7170117944,
        "market_cap_change_percentage_24h": -6.19735,
        "circulating_supply": 4034418.41899365,
        "total_supply": 100000000,
        "max_supply": 100000000,
        "ath": 37.83,
        "ath_change_percentage": -94.72036,
        "ath_date": "2021-11-30T08:53:29.047Z",
        "atl": 1.95,
        "atl_change_percentage": 2.16977,
        "atl_date": "2022-10-14T17:34:16.184Z",
        "roi": null,
        "last_updated": "2022-11-07T15:43:57.896Z"
      },
      {
        "id": "jupiter",
        "symbol": "jup",
        "name": "Jupiter",
        "image": "https://assets.coingecko.com/coins/images/10351/large/logo512.png?1632480932",
        "current_price": 0.00644681,
        "market_cap": 6502834,
        "market_cap_rank": 1070,
        "fully_diluted_valuation": null,
        "total_volume": 237132,
        "high_24h": 0.00663757,
        "low_24h": 0.00635101,
        "price_change_24h": -0.000166033069673289,
        "price_change_percentage_24h": -2.51077,
        "market_cap_change_24h": -119774.88469554018,
        "market_cap_change_percentage_24h": -1.80858,
        "circulating_supply": 1000000000,
        "total_supply": 1000000000,
        "max_supply": null,
        "ath": 0.128999,
        "ath_change_percentage": -94.95905,
        "ath_date": "2021-03-22T08:37:18.982Z",
        "atl": 0.00000435,
        "atl_change_percentage": 149276.71305,
        "atl_date": "2020-10-16T10:27:38.449Z",
        "roi": null,
        "last_updated": "2022-11-07T15:43:54.074Z",
        "vip": true
      },
      {
        "id": "temco",
        "symbol": "temco",
        "name": "TEMCO",
        "image": "https://assets.coingecko.com/coins/images/6210/large/bSZ7HUuS_400x400.jpg?1549002381",
        "current_price": 0.00212911,
        "market_cap": 0,
        "market_cap_rank": null,
        "fully_diluted_valuation": null,
        "total_volume": 71377,
        "high_24h": 0.00217222,
        "low_24h": 0.00204999,
        "price_change_24h": 0.00001949,
        "price_change_percentage_24h": 0.92375,
        "market_cap_change_24h": 0,
        "market_cap_change_percentage_24h": 0,
        "circulating_supply": 0,
        "total_supply": 6000000000,
        "max_supply": null,
        "ath": 0.03467044,
        "ath_change_percentage": -93.95465,
        "ath_date": "2021-04-02T02:07:25.523Z",
        "atl": 0.0000922,
        "atl_change_percentage": 2173.31693,
        "atl_date": "2020-05-06T20:19:15.657Z",
        "roi": {
          "times": -0.6638073755895869,
          "currency": "usd",
          "percentage": -66.3807375589587
        },
        "last_updated": "2022-11-07T15:43:38.072Z"
      }
    ]
  )

 
  const [buy, setBuy]= useState( ['cryptoblades','burger-swap','jasmycoin','gods-unchained','tezos','eos','derace','aptos','bitcoin-cash']) 

  const [updateArr, setUpdateArr] = useState([])



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


useEffect(()=>{
const welcome = ()=>{
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLocaleLowerCase()}&ids=${buy.toString()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  axios.get(url).then((res)=>{setUpdateArr(res.data)}).then(()=>{}).catch((err)=> {()=>setCmvErrorsx('No internet connection')})
  
}

  welcome ()
  },[buy]);



  





const precompArr = []





 return(
  <>
  <Head>
        <title>Gem Keeper</title>
        <meta name="Gem Keeper" content="Store crypto gems | Monitor crypto gems" />
        <meta name="Crypto Gem Keeper" content="Store crypto gems | Monitor crypto gems" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
  {<Header />}
 
  <main >
  <body>
  <div className={styles.cmv_top}></div>
  <div className={styles.cmvBody}>
  

  <AddCrypto activeCoins={activeCoins} buy={buy} setBuy={setBuy} setActiveCoins={setActiveCoins} currency={currency} quickData={quickData} setQuickData={setQuickData} setCoinArr={setCoinArr} setRunOrStop={setRunOrStop} searchGems={searchGems} setSearchGems={setSearchGems}  />

  <DisplayCoin activeCoins={activeCoins} buy={buy} setBuy={setBuy} setActiveCoins={setActiveCoins} setQuickData={setQuickData} setCoinArr={setCoinArr} currency={currency} searchGems={searchGems} />
   
  <UpdateCoinInfo activeCoins={activeCoins} buy={buy} setBuy={setBuy} setActiveCoins={setActiveCoins} currency={currency} quickData={quickData} setQuickData={setQuickData} setCoinArr={setCoinArr} setRunOrStop={setRunOrStop} searchGems={searchGems} setSearchGems={setSearchGems} updateArr={updateArr} setUpdateArr={setUpdateArr} />
 
 

</div>
</body>



   <Footer />

 
</main>
  </>
 )
  
  
}


