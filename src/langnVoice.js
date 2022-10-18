import React, {Suspense, useState,useEffect,useRef} from 'react';
import {FaBars,FaPlay,FaPause,FaPlayCircle,FaRegPlayCircle,FaRegPauseCircle} from 'react-icons/fa'
import {BsFillPlayFill,BsPlayCircleFill,BsPauseCircleFill} from 'react-icons/bs'
import {ImCancelCircle} from 'react-icons/im'
import  {FontAwesome} from 'react-icons/fa'
import axios from 'axios'
import styles from '../styles/CMVControls.module.css'
import Speech from 'speak-tts'



const controlIcons = [FaRegPlayCircle,FaRegPauseCircle,ImCancelCircle]

export function CMVControls(){
return(
<>
<div className={styles.CMVControls_main1_voices}>
<form>
<select value = 'en-GB' onChange={(s)=> setCurrentLang(s.target.value)}>
{/*
allLang.map((lang,index)=>{
    
    return ( <option key = {lang+index} value = {lang} >{lang}</option>)

})
*/}
</select>
</form>
</div> 
</>
)
}