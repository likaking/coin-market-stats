import React, {Suspense, useState,useEffect,useRef,useLayoutEffect} from 'react';
import { Sparklines,SparklinesLine,SparklinesSpots } from 'react-sparklines';
import Home from '../pages/index.js'
import axios from 'axios'
import styles from '../styles/tools.module.css'
import {FaCaretDown,FaCaretUp,FaTrashAlt,FaStar,FaInfoCircle,FaWindowClose,FaTimes} from 'react-icons/fa'
import { MdOutlineSettingsPower,MdOutlinePowerSettingsNew,MdPowerSettingsNew } from "react-icons/md";


export default function Tools({activeCoins,buy,setBuy,setActiveCoins,Speech,setQuickData,setCoinArr,currency,searchGems,openModal,setOpenModal,
modalSearch,setModalSearch,startModal,setStartModal,index,setIndex,priceAlertzPing,setPriceAlertzPing,currencySymbol,setCurrencySymbol,openTools,setOpenTools}){



return(
<>
<div  className={styles.tools_container} style = {{display: openTools ? 'block' : 'none'}} >
<div  className={styles.tools_inner_container}>
<div className={styles.tools_close}><MdPowerSettingsNew className={styles.tools_closeIcon} /></div>
<div className={styles.form}>
<form >
<select className={styles.select}>
<option className={styles.selectOptions}>Market Capital</option>
<option className={styles.selectOptions}>Current Price</option>
</select>
<div className={styles.formDivs}>
<button type='button'  className={styles.formAbvBel_Btns}>Above</button> <button type='button' className={styles.formAbvBel_Btns}>Below</button>
</div>
<div className={styles.formDivs}>
<input type= 'number' placeholder='Type numder'  className={styles.formInput} />
</div>
<div className={styles.formDivs}>
<button type='button'  className={styles.formProcessBtn}>Process</button>
</div>
</form>
</div>

<div className={styles.formHP}>
<h4 className={styles.header}>Historical Prices</h4>
<form >
<div className={styles.formDivs}>
<input type= 'text' placeholder='Crypto Symbol eg BTC'  className={styles.formInput} />
</div>
<div className={styles.formDivs}>
<input type= 'text' placeholder='Date eg 22/10/2015 '  className={styles.formInput} />
</div>
<div className={styles.formDivs}>
<button  type='button' className={styles.formProcessBtnHP}>Process</button>
</div>
</form>
</div>

<div className={styles.formOnOff}><span onClick ={()=>{setOpenTools(false)}}  ><MdPowerSettingsNew  className={styles.formOnOff_Icon}   /></span></div>
</div>
</div>

</>
)
}