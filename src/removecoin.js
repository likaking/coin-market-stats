import React, {Suspense, useState,useEffect,useRef} from 'react';
import Home from '../pages/index.js'
import {data1,Speech} from '../pages/index.js'
import axios from 'axios'
import styles from '../styles/RemoveCoin.module.css'
import {FaTrashAlt} from 'react-icons/fa'
import {addCoin,buy,activeCoins,AddCrypto,coinIsexistinErr} from '../src/addcoin.js'



export function DisplayCoin({activeCoins,buy,setBuy,setActiveCoins,Speech,setQuickData,setCoinArr}){
const deleteIcon = useRef([])


const removeAsset = async(asset)=>{
    if(buy.indexOf(asset) !== -1){
   const findIndexOfAsset = buy.indexOf(asset)
   const filtered = new Promise((resolve,reject)=> {resolve(activeCoins.filter((removeAsset)=>{
  return removeAsset.id !== asset 
   }))});
   
   let result = await filtered
  setActiveCoins(result);
  setBuy(buy.filter(del=>  del !== asset));
  ()=>{Speech.cancel()};
  setCoinArr([])
  setQuickData(true);


}
else{
    return false
}
}

return(
<>
<div className={styles.displayCoin}>
<div className={styles.displayCoin_main}>
<div className={styles.displayCoin_screen}>
{
activeCoins && activeCoins.length > 0 && activeCoins.map((display,i)=>

<div key = {display.symbol+i} className={styles.displayCoin_container} 
onMouseEnter = {()=>{deleteIcon.current[i].style.display = 'block'}}   
onMouseLeave = {()=>{deleteIcon.current[i].style.display = 'none'}} >
    <img src = {display.image} alt ={display.name} className={styles.displayCoin_img}/>
    <div  className={styles.displayCoin_name}>{display.symbol !== undefined? display.symbol.toUpperCase() : ''}</div>
    <div className={styles.displayCoin_delete} ref = {(el)=> {deleteIcon.current[i]=el}}>
    <FaTrashAlt className={styles.displayCoin_deleteIcon} onClick={()=>{removeAsset(display.id)}}/></div></div>


)   
}

</div>
</div>
</div>

</>
)
}