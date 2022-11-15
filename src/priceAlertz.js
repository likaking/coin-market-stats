import React, {Suspense, useState,useEffect,useRef,useLayoutEffect} from 'react';
import Home from '../pages/index.js'
import {data1,Speech} from '../pages/index.js'
import axios from 'axios'
import styles from '../styles/Dipped.module.css'
import {FaCaretDown,FaCaretUp,FaTrashAlt,FaStar,FaInfoCircle,FaWindowClose} from 'react-icons/fa'
import {addCoin,buy,activeCoins,AddCrypto,coinIsexistinErr} from '../src/addcoin.js'



export default function AddPriceAlertz({activeCoins,buy,setBuy,setActiveCoins,Speech,setQuickData,setCoinArr,currency,searchGems,openModal,setOpenModal,modalSearch,setModalSearch,startModal,setStartModal,index,setIndex,priceAlertzPing,setPriceAlertzPing,updateArr,setUpdateArr}){

const priceAlertzArray = [...priceAlertzPing]

const priceAlertzArrayId = []

useEffect(()=>{

priceAlertzArray.map((coinId)=>{
priceAlertzArrayId.push(coinId.id)  

})


},[priceAlertzPing,updateArr])







useEffect(()=>{
    const updatePriceAlertz = async (pricesObj)=>{
	
        if(priceAlertzArrayId.indexOf(pricesObj.id)=== -1){
            setPriceAlertzPing([...priceAlertzPing,pricesObj])
        
            }
            else{
            return false
            }	
        }

const getPriceAlertz = ()=>{
	
activeCoins.map((prices)=>{
if(prices.priceAlertz_active === true && prices.current_price > 0 &&  prices.current_price < prices.priceAlertz ){
updatePriceAlertz(prices)
}
})
}
getPriceAlertz()
},[activeCoins])




}