import React, {Suspense, useState,useEffect,useRef,useLayoutEffect} from 'react';
import { Sparklines,SparklinesLine,SparklinesSpots } from 'react-sparklines';
import Home from '../pages/index.js'
import axios from 'axios'
import styles from '../styles/tools.module.css'
import {FaCaretDown,FaCaretUp,FaTrashAlt,FaStar,FaInfoCircle,FaWindowClose,FaTimes} from 'react-icons/fa'
import { MdOutlineSettingsPower,MdOutlinePowerSettingsNew,MdPowerSettingsNew } from "react-icons/md";


export default function ToolsOnButton({activeCoins,buy,setBuy,setActiveCoins,Speech,setQuickData,setCoinArr,currency,searchGems,openModal,setOpenModal,
modalSearch,setModalSearch,startModal,setStartModal,index,setIndex,priceAlertzPing,setPriceAlertzPing,currencySymbol,setCurrencySymbol,openTools,setOpenTools}){



return(
<>
<div className={styles.formOn} onClick ={()=>{setOpenTools(true)}} style = {{display: !openTools ? 'block' : 'none'}} ><MdPowerSettingsNew  className={styles.formOn_Icon} /></div>
</>
)
}