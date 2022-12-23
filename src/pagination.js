import React, {Suspense, useState,useEffect,useRef} from 'react';
import styles from '../styles/Pagination.module.css'
import Home from '../pages/index.js'
import {data1} from '../pages/index.js'
import axios from 'axios'
import {FaBell} from 'react-icons/fa'


  

export default function PaginationValues({currencySymbol,setCurrencySymbol,headerText,setHeaderText,funcParams,setFuncParams,number,setNumber,
switchHeader,setSwitchHeader,coinSym,setCoinSym,historicalDate,setHistoricalDate,activeCoins,setActiveCoins,activeCoinsParent,setActiveCoinsParent,hPerror,setHpError,changingCurrency,
setChangingCurrency,arraySelector,setArraySelector,render,setRender}){

 const scrollToTop = () =>{
 const scrollTop = window.scrollY;	 
  scrollTop !== 0  &&  window.scrollTo({
          top: 0, 
          left: 0,
          behavior: 'smooth',
        })
        };
	  
 const setRenderValue = ()=>{
 setRender(()=>Number(10)) 	 
 }
 
 const selectArrayIndex = (index)=>{
 setArraySelector(()=>Number(index)) 
 }
  

return(
<>

<div style = {{textAlign:'center'}}  className = {styles.page_Contianer}>
{
activeCoins.length > 1 && activeCoins.map((page,index)=> 
<span className = {styles.pageNum} onClick = {()=>{setRenderValue;selectArrayIndex(index);scrollToTop()}} key={index} >{index + 1}</span>
)
}
</div>

</>
)

}