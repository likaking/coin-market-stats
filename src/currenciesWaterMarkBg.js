import React, {Suspense, useState,useEffect,useRef,useLayoutEffect} from 'react';
import axios from 'axios'
import styles from '../styles/CurrenciesWaterMark.module.css'





export const CurrenciesWaterMark = ({coinSym,setCoinSym,historicalDate,setHistoricalDate,processHistoricalPrices,setProcessHistoricalPrices,

currency,switchHeader,setSwitchHeader,hPrices,setHPrices,activeCoins,setActiveCoins,hPerror,setHpError,currencySymbol,setCurrencySymbol})=>{


return(
<>
<div className={styles.WM_container}>

<div className={styles.currencySym}>{currencySymbol}</div>
	{/*
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
<div className={styles.currencySym}>{currencySymbol}</div>
*/}



</div>
</>

)

}