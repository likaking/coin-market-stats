import React, {Suspense, useState,useEffect,useRef} from 'react';
import styles from '../styles/UseCases.module.css'
import Home from '../pages/index.js'
import {data1} from '../pages/index.js'
import axios from 'axios'
import Image from 'next/image'


const pixArray = ['/cutegirl.PNG','/sportsman.PNG','/driver.jpg']
  

export function UseCases({}){








return(
<>
<h1 className={styles.useCases_Header}>Crypto Prices In Our Ears</h1>
<div className={styles.useCases_container}>

{
    pixArray.map((pix,index)=>
    <div className={styles.useCases_pix} key = {pix+index}><img key = {pix+index}  src = {pix} className={styles.useCases_img} /></div>
    )
}
</div>

</>
)

}