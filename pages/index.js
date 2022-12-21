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
import SearchCrypto from '../src/search.js'
import {DisplayCoin} from '../src/displayCoin.js'
import {Currencies} from '../src/currencies.js'
import HeaderActivities from '../src/headerActivity.js'
import Tools from '../src/tools.js'
import ToolsOnButton from '../src/toolsOnBtn.js'
import {CurrenciesWaterMark} from '../src/currenciesWaterMarkBg.js'
import PaginationValues from '../src/pagination.js'
const  Footer = React.lazy(()=> import('./footer/footer.js'))



export default function Home(setCmvErrorsx={setCmvErrorsx}) {
  const [currency,setCurrency] = useState('USD')
  const [currencySymbol,setCurrencySymbol] = useState('$')
  const [currencySymbolDisplay,setCurrencySymbolDisplay] = useState('$')
  const [currencyPlural,setCurrencyPlural] = useState('US dollars')
  const [currencySingular,setCurrencySingular] = useState('US dollar')
  const [finalComp, setFinalComp] = useState([])   
  const [coinArr, setCoinArr] = useState([])
  const [info, setInfo] = useState(true)
  const [quickData, setQuickData] = useState(false);
  const [runOrStop,setRunOrStop] = useState(true);
  const [searchGems,setSearchGems] = useState('')
  const [openModal,setOpenModal] = useState(false)
  const [modalSearch,setModalSearch] = useState('')
  const [startModal,setStartModal] = useState(false)
  const [index,setIndex] = useState()
  const [priceAlertzPing,setPriceAlertzPing] = useState([])
  const [openPriceALertsModal,setOpenPriceALertsModal] = useState(false)
  const [openTools,setOpenTools] = useState(true)
  const [headerText,setHeaderText] = useState('Price Change Percentage 24h')
  const [funcParams,setFuncParams] = useState('Above')
  const [number,setNumber] = useState(20)
  const [switchHeader,setSwitchHeader] = useState(false)
  const [coinSym,setCoinSym] = useState('bitcoin')			
  const [historicalDate,setHistoricalDate] = useState('12-11-2018')	
  const [historicalData,setHistoricalData] = useState()	
  const [activeCoins,setActiveCoins] = useState([])
  const [hPerror,setHpError] = useState()	
  const [changingCurrency,setChangingCurrency] = useState()	
  const [arraySelector,setArraySelector] = useState(0)	
  const [render, setRender] = useState(10)
  const [loadingStats,setLoadingStats] = useState('')
  

// Unused!
const [buy, setBuy]= useState( ['cryptoblades','burger-swap','jasmycoin','gods-unchained','tezos','eos','derace','aptos','bitcoin-cash','victoria-vr','sylo','maps','pallapay','genopets','jupiter','temco']) 
// Unused!
const [updateArr, setUpdateArr] = useState([])

const approvedCurrencies = [
{id:'USD'},
{id:'USD'},
{id:'JPY'},
  ];

const updateCurrenccy = useEffect(()=>{
const fixCurrency = (currency)=>{
setCurrency(currency)
	
}},[currency])


 return(
  <>
  <Head>
  <title>Coin Market Stats</title>
  <meta name="Coin Market Stats" content="Real time crpto stats  for free" />
  <link rel="icon" href="favicon.PNG" />
   <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
      
  <Header />

  <main style={{minHeight:'50vh'}} >
  <div className={styles.cmvBody}>
  
  <HeaderActivities currencySymbol={currencySymbol} setCurrencySymbol={setCurrencySymbol} headerText={headerText} setHeaderText={setHeaderText}
  funcParams={funcParams} setFuncParams={setFuncParams} number={number} setNumber={setNumber} switchHeader={switchHeader} 
  setSwitchHeader={setSwitchHeader} coinSym={coinSym} setCoinSym={setCoinSym} historicalDate={historicalDate} setHistoricalDate={setHistoricalDate} 
  activeCoins={activeCoins} setActiveCoins={setActiveCoins} hPerror={hPerror} setHpError={setHpError} changingCurrency={changingCurrency}
  setChangingCurrency ={setChangingCurrency} arraySelector={arraySelector} setArraySelector={setArraySelector} loadingStats={loadingStats}
  setLoadingStats={setLoadingStats} />
  
  <PaginationValues  currencySymbol={currencySymbol} setCurrencySymbol={setCurrencySymbol} headerText={headerText} setHeaderText={setHeaderText}
  funcParams={funcParams} setFuncParams={setFuncParams} number={number} setNumber={setNumber} switchHeader={switchHeader} 
  setSwitchHeader={setSwitchHeader} coinSym={coinSym} setCoinSym={setCoinSym} historicalDate={historicalDate} setHistoricalDate={setHistoricalDate} 
  activeCoins={activeCoins} setActiveCoins={setActiveCoins} hPerror={hPerror} setHpError={setHpError} changingCurrency={changingCurrency}
  setChangingCurrency ={setChangingCurrency} arraySelector={arraySelector} setArraySelector={setArraySelector} />
  
  <SearchCrypto activeCoins={activeCoins} buy={buy} setBuy={setBuy} setActiveCoins={setActiveCoins} currency={currency} quickData={quickData}
  setQuickData={setQuickData} setCoinArr={setCoinArr} setRunOrStop={setRunOrStop} searchGems={searchGems} setSearchGems={setSearchGems} 
  priceAlertzPing={priceAlertzPing} setPriceAlertzPing={setPriceAlertzPing} openPriceALertsModal={openPriceALertsModal} 
  setOpenPriceALertsModal={setOpenPriceALertsModal} switchHeader={switchHeader} setSwitchHeader={setSwitchHeader} />
 
  <Currencies currency={currency} setCurrency={setCurrency} currencyPlural={currencyPlural} setCurrencyPlural={setCurrencyPlural} 
  currencySingular={currencySingular} setCurrencySingular={setCurrencySingular} currencySymbol ={currencySymbol} 
  setCurrencySymbol={setCurrencySymbol} hPerror={hPerror} setHpError={setHpError} changingCurrency={changingCurrency}
  setChangingCurrency ={setChangingCurrency} />
 
  <DisplayCoin activeCoins={activeCoins} buy={buy} setBuy={setBuy} setActiveCoins={setActiveCoins} setQuickData={setQuickData}
  setCoinArr={setCoinArr} currency={currency} searchGems={searchGems} openModal={openModal} setOpenModal={setOpenModal}
  modalSearch={modalSearch} setModalSearch={setModalSearch} startModal={startModal} setStartModal={setStartModal} index={index}
  setIndex={setIndex} priceAlertzPing ={priceAlertzPing} setPriceAlertzPing={setPriceAlertzPing} currencySymbol={currencySymbol}
  setCurrencySymbol={setCurrencySymbol} switchHeader={switchHeader} setSwitchHeader={setSwitchHeader} arraySelector={arraySelector} 
  setArraySelector={setArraySelector} render={render} setRender={setRender} currencySymbolDisplay={currencySymbolDisplay} setCurrencySymbolDisplay={setCurrencySymbolDisplay}  />
 
  <PaginationValues  currencySymbol={currencySymbol} setCurrencySymbol={setCurrencySymbol} headerText={headerText} setHeaderText={setHeaderText}
  funcParams={funcParams} setFuncParams={setFuncParams} number={number} setNumber={setNumber} switchHeader={switchHeader} 
  setSwitchHeader={setSwitchHeader} coinSym={coinSym} setCoinSym={setCoinSym} historicalDate={historicalDate} setHistoricalDate={setHistoricalDate} 
  activeCoins={activeCoins} setActiveCoins={setActiveCoins} hPerror={hPerror} setHpError={setHpError} changingCurrency={changingCurrency}
  setChangingCurrency ={setChangingCurrency} arraySelector={arraySelector} setArraySelector={setArraySelector} render={render} setRender={setRender}  />
  
  <Tools activeCoins={activeCoins} setActiveCoins={setActiveCoins} buy={buy} setBuy={setBuy} currency={currency} setCurrency={setCurrency} currencyPlural={currencyPlural} setCurrencyPlural={setCurrencyPlural} 
  currencySingular={currencySingular} setCurrencySingular={setCurrencySingular} currencySymbol ={currencySymbol} setCurrencySymbol={setCurrencySymbol}
  openTools={openTools} setOpenTools={setOpenTools} headerText={headerText} setHeaderText={setHeaderText} funcParams={funcParams} setFuncParams={setFuncParams}
  number={number} setNumber={setNumber} switchHeader={switchHeader} setSwitchHeader={setSwitchHeader} coinSym={coinSym} setCoinSym={setCoinSym}
  historicalDate={historicalDate} setHistoricalDate={setHistoricalDate} hPerror={hPerror} setHpError={setHpError} changingCurrency={changingCurrency}
  setChangingCurrency ={setChangingCurrency} loadingStats={loadingStats} setLoadingStats={setLoadingStats} 
  currencySymbolDisplay={currencySymbolDisplay} setCurrencySymbolDisplay={setCurrencySymbolDisplay} />
  
  <ToolsOnButton openTools={openTools} setOpenTools={setOpenTools} searchGems={searchGems} setSearchGems={setSearchGems} />
  <CurrenciesWaterMark currencySymbol ={currencySymbol} setCurrencySymbol={setCurrencySymbol} />
  </div>
  </main>

  <Footer />
  

   </>
 )  
 }


