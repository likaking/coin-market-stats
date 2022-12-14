import React, {Suspense, useState,useEffect,useRef,useLayoutEffect} from 'react';
import { Sparklines,SparklinesLine,SparklinesSpots } from 'react-sparklines';
import Home from '../pages/index.js'
import axios from 'axios'
import styles from '../styles/hp.module.css'
import {FaCaretDown,FaCaretUp,FaTrashAlt,FaStar,FaInfoCircle,FaWindowClose} from 'react-icons/fa'


export function DispalyAllHistoricalPrices({activeCoins,setActiveCoins,openModal,currencySymbol,setCurrencySymbol,coinSym,setCoinSym,
historicalDate,setHistoricalDate,processHistoricalPrices,setProcessHistoricalPrices,currency,switchHeader,setSwitchHeader,hPrices,
setHPrices,searchGems,setSearchGems,currencySymbolDisplay,setCurrencySymbolDisplay}){

const deleteIcon = useRef([]);
const infoIconR = useRef([]);
const star = useRef([]);
const [sticky,setSticky] = useState(false)
const [shadow,setShadow] = useState(false)
const [currencyx, setCurrencyx] = useState('$')

const container = useRef([])
const containerL = useRef([])
const leftTable = useRef(null)
const rightTable = useRef(null)
const tableHeader = useRef(null)

//leftTable.current? leftTable.current.style.boxShadow = '4px 0px 3px 1px   #aaaaaa' : ''

    const handleShadow = event => {
    if(event.currentTarget.scrollLeft > 5){
        setShadow(true)
    }
    else{
        setShadow(false)
    }

    };


    const hoverIn = (i)=>{
         container.current[i].style.backgroundColor = 'rgba(231, 245, 245, 0.199)'
         containerL.current[i].style.backgroundColor = 'rgba(231, 245, 245, 0.199)'
    }

    const hoverOut = (i)=>{
        container.current[i].style.backgroundColor = 'rgba(213, 236, 236, 0)'
        containerL.current[i].style.backgroundColor = 'rgba(213, 236, 236, 0)'
   }

    const search = hPrices.filter((item)=>{
    return item.symbol.includes(searchGems)});

    const Vip = (gem)=>{
    const getGem = hPrices.map((coinz)=>{

    if(coinz.id === gem){
        return {...coinz, vip:coinz.vip === true ? false : true}
    }
   return coinz
   })

   setHPrices(getGem)
   }



useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

      
       const isSticky = (e) => {
            const scrollTop = window.scrollY;
            scrollTop >= 250 ? setSticky(true): setSticky(false);
            
        };
		
useEffect(()=>{
if(switchHeader){
!sticky? tableHeader.current.style.borderBottom = '1px solid  rgba(186, 202, 200, 0.308)' : tableHeader.current.style.borderBottom = '0px'
}	
},[sticky])

//{itemz.circulating_supply.toLocaleString().length > 12 && itemz.circulating_supply.toLocaleString().slice(0,16)}{itemz.circulating_supply.toLocaleString().length > 12 && <br />}{itemz.circulating_supply.toLocaleString().length > 12 && Number(itemz.circulating_supply).toLocaleString().slice(16)} {itemz.circulating_supply.toLocaleString().length < 12 && Number(itemz.circulating_supply).toLocaleString()} {itemz.symbol.toUpperCase()}

return(
<>

{ switchHeader && <div ><div className={styles.tableHeader} ref={tableHeader}><div className={styles.tableHeader_L}><div></div><div >Name</div></div> <div className={styles.tableHeader_R}><div >Price</div> <div >Total Volume</div> <div >Market Cap</div></div></div></div> }

<div className={styles.dipedCrypto}>
{switchHeader && <div className={styles.dipedCrypto_L} ref = {leftTable} id={shadow? styles.dipedCrypto_L_cont : ''}>
<div className={styles.dipedCrypto_HL_name}><div>Name</div></div>

	

{
	
    switchHeader && hPrices? hPrices.map((itemz,index)=> <div key={itemz.id+index} ref = {(el)=> containerL.current[index]=el}  onMouseEnter = {()=>hoverIn(index)} onMouseLeave = {()=>hoverOut(index)} 
     className={styles.dipedCrypto_L_container}>  <div className={styles.dipedCrypto_L_Star_container}> <span ref={(el)=> star.current[index] = el} ><FaStar className={styles.dipedCrypto_L_Star} style = {{color:itemz.vip === true ? 'rgb(228, 161, 36)' :'rgb(207, 207, 207)'}}   onClick={()=>{Vip(itemz.id)}} /></span> </div>
     <div className={styles.dipedCrypto_L_img_container}><a href={`https://www.coingecko.com/en/coins/${itemz.id}`} target='_blank' >
     <img src={itemz.image.small} alt = {itemz.id}  className={styles.dipedCrypto_L_img}  /></a> </div> 
     <div className={itemz.id.length >= 18 ? styles.dipedCrypto_L_id_direction : styles.dipedCrypto_L_id}><div className={styles.dipedCrypto_L_id_span} ><a href={`https://www.coingecko.com/en/coins/${itemz.id}`} target='_blank' >{itemz.name }</a></div><div className={styles.dipedCrypto_L_symbol}><a href={`https://www.coingecko.com/en/coins/${itemz.id}`} target='_blank' >{itemz.symbol.toUpperCase()}</a></div> </div> </div>) : null
}
</div>
}

{switchHeader && <div className={styles.dipedCrypto_R} ref={rightTable} onScroll={handleShadow}>
<div className={styles.dipedCrypto_HR}><div className={styles.dipedCrypto_HR_price}>Price</div> <div className={styles.dipedCrypto_HR_hourly}>Total Volume</div> <div className={styles.dipedCrypto_HR_24H}>Market Cap</div>  </div>
{
    switchHeader && hPrices.map ? hPrices.map((cryp,index)=> {
    var realInex = index;
    return (
    <div key={cryp.id+index} ref = {(el)=> container.current[index]=el} className={styles.dipedCrypto_R_container}  onMouseEnter = {()=>hoverIn(index)} onMouseLeave = {()=>hoverOut(index)}  > 
    <div className={styles.dipedCrypto_R_container_price}>{currencySymbolDisplay}{Number(cryp.market_data.current_price[currency.toLowerCase()]).toLocaleString()}</div>  
    <div className={styles.dipedCrypto_R_container_totalVolume}>{currencySymbolDisplay}{Number(cryp.market_data.total_volume[currency.toLowerCase()]).toLocaleString()}  </div> 
	<div className={styles.dipedCrypto_R_container_marketCap}>{currencySymbolDisplay}{Number(cryp.market_data.market_cap[currency.toLowerCase()]).toLocaleString()}  </div> 
	
	
	
	</div>)}):null
}
</div>
}
</div>

</>
)

}

