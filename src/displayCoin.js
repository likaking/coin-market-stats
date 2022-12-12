import React, {Suspense, useState,useEffect,useRef,useLayoutEffect} from 'react';
import { Sparklines,SparklinesLine,SparklinesSpots } from 'react-sparklines';
import Home from '../pages/index.js'
import axios from 'axios'
import styles from '../styles/DisplayAll.module.css'
import {FaCaretDown,FaCaretUp,FaTrashAlt,FaStar,FaInfoCircle,FaWindowClose} from 'react-icons/fa'


export function DisplayCoin({activeCoins,buy,setBuy,setActiveCoins,Speech,setQuickData,setCoinArr,currency,searchGems,openModal,setOpenModal,
modalSearch,setModalSearch,startModal,setStartModal,index,setIndex,priceAlertzPing,setPriceAlertzPing,currencySymbol,setCurrencySymbol,
switchHeader,setSwitchHeader,arraySelector,setArraySelector}){

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

    const search = activeCoins[Number(arraySelector)]?.filter((item)=>{
    return item.symbol.includes(searchGems.toLowerCase())});
	

    const Vip = (gem)=>{
    const getGem = activeCoins.map((coinz)=>{

    if(coinz.id === gem){
        return {...coinz, vip:coinz.vip === true ? false : true}
    }
   return coinz
   })

   setActiveCoins(getGem)
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
if(!switchHeader){
!sticky? tableHeader.current.style.borderBottom = '1px solid  rgba(186, 202, 200, 0.308)' : tableHeader.current.style.borderBottom = '0px'
}	
},[sticky])

//{itemz.circulating_supply.toLocaleString().length > 12 && itemz.circulating_supply.toLocaleString().slice(0,16)}{itemz.circulating_supply.toLocaleString().length > 12 && <br />}{itemz.circulating_supply.toLocaleString().length > 12 && Number(itemz.circulating_supply).toLocaleString().slice(16)} {itemz.circulating_supply.toLocaleString().length < 12 && Number(itemz.circulating_supply).toLocaleString()} {itemz.symbol.toUpperCase()}

return(
<>

{ !switchHeader && <div className={sticky ? styles.isSticky : ''}><div className={styles.tableHeader} ref={tableHeader}><div className={styles.tableHeader_L}><div></div><div >Name</div></div> <div className={styles.tableHeader_R}><div >Price</div> <div >1h %</div> <div >24h %</div> <div >7d %</div> <div >Market Cap</div><div >Volume(24)</div><div>Circulating Supply</div><div>Last 7 days</div></div></div></div> }

<div className={styles.dipedCrypto}>
{!switchHeader && <div className={styles.dipedCrypto_L} ref = {leftTable} id={shadow? styles.dipedCrypto_L_cont : ''}>
<div className={styles.dipedCrypto_HL_name}><div>Name</div></div>
{
    !switchHeader && search? search?.map((itemz,index)=> <div key={itemz.id+index} ref = {(el)=> containerL.current[index]=el}  onMouseEnter = {()=>hoverIn(index)} onMouseLeave = {()=>hoverOut(index)} 
     className={styles.dipedCrypto_L_container}>  <div className={styles.dipedCrypto_L_rank}><div></div> <div></div> <div>{'#'}{itemz.market_cap_rank}</div> </div>  <div className={styles.dipedCrypto_L_Star_container}> <span ref={(el)=> star.current[index] = el} ><FaStar className={styles.dipedCrypto_L_Star} style = {{color:itemz.vip === true ? 'rgb(228, 161, 36)' :'rgb(207, 207, 207)'}}   onClick={()=>{Vip(itemz.id)}} /></span> </div>
     <div className={styles.dipedCrypto_L_img_container}><a href={`https://www.coingecko.com/en/coins/${itemz.id}`} target='_blank' >
     <img src={itemz.image} alt = {itemz.id}  className={styles.dipedCrypto_L_img}  /></a> </div> 
     <div className={itemz.id.length >= 18 ? styles.dipedCrypto_L_id_direction : styles.dipedCrypto_L_id}><div className={styles.dipedCrypto_L_id_span} ><a href={`https://www.coingecko.com/en/coins/${itemz.id}`} target='_blank' >{itemz.id[0].toUpperCase() + itemz.id.slice(1).toLowerCase() }</a></div><div className={styles.dipedCrypto_L_symbol}><a href={`https://www.coingecko.com/en/coins/${itemz.id}`} target='_blank' >{itemz.symbol.toUpperCase()}</a></div> </div> </div>) : null
}
</div>
}

{!switchHeader && <div className={styles.dipedCrypto_R} ref={rightTable} onScroll={handleShadow}>
<div className={styles.dipedCrypto_HR}><div className={styles.dipedCrypto_HR_price}>Price</div> <div className={styles.dipedCrypto_HR_hourly}>1h % </div> <div className={styles.dipedCrypto_HR_24H}>24h %</div> <div className={styles.dipedCrypto_HR_7dh}>7d %</div> <div className={styles.dipedCrypto_HR_mktCap}>Market Cap</div> <div className={styles.dipedCrypto_HR_vol}>Volume (24)</div>  <div className={styles.dipedCrypto_HR_circulatingSup}>Circulating Supply</div> <div className={styles.dipedCrypto_HR_sparkLine}>Last 7 days</div> </div>
{
    !switchHeader && search?.map((itemz,index)=> {
    var realInex = index;
    return (
    <div key={itemz.id+index} ref = {(el)=> container.current[index]=el} className={styles.dipedCrypto_R_container}  onMouseEnter = {()=>hoverIn(index)} onMouseLeave = {()=>hoverOut(index)}  > 
    <div className={styles.dipedCrypto_R_container_price}>{itemz.current_price < 1 &&<span>{currencySymbol}{itemz.current_price}</span>} {itemz.current_price >= 1 &&<span>{currencySymbol}{itemz.current_price.toLocaleString()}</span>}</div>  
	<div className={styles.dipedCrypto_R_container_hourlyChange} style={{color: Number(itemz.price_change_percentage_1h_in_currency) < 0 ?'red' : 'rgb(28, 187, 44)'}}><FaCaretDown style={{display: Number(itemz.price_change_percentage_1h_in_currency) < 0?'block' : 'none' }}  className={styles.dipedCrypto_R_faCaretUp} /> <FaCaretUp style={{display: Number(itemz.price_change_percentage_1h_in_currency) >= 0 ? 'block' : 'none'  }} className={styles.dipedCrypto_R_faCaretUp} />{Number(itemz.price_change_percentage_1h_in_currency) < 0 ? Number(itemz.price_change_percentage_1h_in_currency).toFixed(2).slice(1) : Number(itemz.price_change_percentage_1h_in_currency).toFixed(2)}</div> 
	<div className={styles.dipedCrypto_R_container_24hChange} style={{color: Number(itemz.price_change_percentage_24h_in_currency) < 0 ?'red' : 'rgb(28, 187, 44)'}}><FaCaretDown style={{display: Number(itemz.price_change_percentage_24h_in_currency) < 0?'block' : 'none' }}  className={styles.dipedCrypto_R_faCaretUp} /> <FaCaretUp style={{display: Number(itemz.price_change_percentage_24h_in_currency) >= 0 ? 'block' : 'none'  }} className={styles.dipedCrypto_R_faCaretUp} />{Number(itemz.price_change_percentage_24h_in_currency) < 0 ? Number(itemz.price_change_percentage_24h_in_currency).toFixed(2).slice(1) : Number(itemz.price_change_percentage_24h_in_currency).toFixed(2)}</div> 
	<div className={styles.dipedCrypto_R_container_7d} style={{color: Number(itemz.price_change_percentage_7d_in_currency) < 0 ?'red' : 'rgb(28, 187, 44)'}}><FaCaretDown style={{display: Number(itemz.price_change_percentage_7d_in_currency) < 0?'block' : 'none' }}  className={styles.dipedCrypto_R_faCaretUp} /> <FaCaretUp style={{display: Number(itemz.price_change_percentage_7d_in_currency) >= 0 ? 'block' : 'none'  }} className={styles.dipedCrypto_R_faCaretUp} />{Number(itemz.price_change_percentage_7d_in_currency) < 0 ? Number(itemz.price_change_percentage_7d_in_currency).toFixed(2).slice(1) : Number(itemz.price_change_percentage_7d_in_currency).toFixed(2)}</div> 
	<div className={styles.dipedCrypto_R_container_mktCap}>{currencySymbol}{Number(itemz.market_cap.toFixed()).toLocaleString()}</div>
    <div className={styles.dipedCrypto_R_container_volume}>{currencySymbol}{Number(itemz.total_volume.toFixed()).toLocaleString()}</div>
	<div className={styles.circulatingSupply}>{Number(itemz.circulating_supply.toFixed()).toLocaleString()} {itemz.symbol.toUpperCase()}</div>
	<div className={styles.sparkline}><div className={styles.sparkline_content}  >
	<Sparklines data={itemz.sparkline_in_7d.price}  width={100} height={43} margin={10}  >
    <SparklinesLine style={{ stroke: itemz.sparkline_in_7d.price[0] > itemz.current_price ? 'rgb(214, 22, 37)' : 'rgb(28, 187, 44)' , strokeWidth: "1.2", fill: "none" }}   />
    </Sparklines>
	
	</div></div>  </div>)})
}
</div>
}
</div>
</>
)
}

