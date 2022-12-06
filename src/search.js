import React, {Suspense, useState,useEffect,useRef} from 'react';
import styles from '../styles/Home.module.css'
import Home from '../pages/index.js'
import {data1} from '../pages/index.js'
import axios from 'axios'
import {FaBell} from 'react-icons/fa'


  

export default function AddCrypto({activeCoins,buy,setBuy,setActiveCoins,currency,speech,quickData,setQuickData,setCoinArr,setRunOrStop,searchGems,setSearchGems,priceAlertzPing,setPriceAlertzPing,openPriceALertsModal,setOpenPriceALertsModal}){
const [coinAlreadyExistError,setCoinAlreadyExistError] = useState('')
const coinIsExitingErr = useRef(null)
const [addNewCoin, setAddNewCoin] = useState('')
const [addNewCoinData, setAddNewCoinData] = useState([])
const [currencyxe, setCurrencyxe] = useState('usd')
const addCoinError = useRef(null)
const addCoinInput = useRef(null)
const netWorkErr = useRef(null)
const textArea  = useRef(null)
const priceAlertz = useRef(null)
const addCoinContainer = useRef(null)
const addCoinForm = useRef(null)

  
   
return(
<>
  <div className={styles.main_cmv_contianer}>
  <div className={styles.cmv_device_contianer}>
  <form>
  <div className={styles.cmv_device_search_cont}>
  <input placeholder = 'Search...' type= 'text' name = 'search' className={styles.cmv_device_search}  onChange={(e)=>{setSearchGems(e.target.value)}} />
  </div>
  </form>
  </div>
  </div>

</>
)

}