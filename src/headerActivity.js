import React, {Suspense, useState,useEffect,useRef} from 'react';
import styles from '../styles/Home.module.css'
import Home from '../pages/index.js'
import {data1} from '../pages/index.js'
import axios from 'axios'
import {FaBell} from 'react-icons/fa'


  

export default function HeaderActivity({currencySymbol,setCurrencySymbol}){

console.log(currencySymbol)
return(
<>
<h2 style ={{textAlign:'center',color:'rgb(56, 88, 84)'}} >Market Cap Less or equal {currencySymbol}{Number(100000).toLocaleString()}</h2>
</>
)

}