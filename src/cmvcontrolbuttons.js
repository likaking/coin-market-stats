import React, {Suspense, useState,useEffect,useRef} from 'react';
import {FaBars,FaPlay,FaPause,FaPlayCircle,FaRegPlayCircle,FaRegPauseCircle} from 'react-icons/fa'
import {BsFillPlayFill,BsPlayCircleFill,BsPauseCircleFill} from 'react-icons/bs'
import {ImCancelCircle} from 'react-icons/im'
import  {FontAwesome} from 'react-icons/fa'
import axios from 'axios'
import styles from '../styles/CMVControls.module.css'
import Speech from 'speak-tts'
import {Currencies} from '../src/currencies.js'



const controlIcons = [FaRegPlayCircle,FaRegPauseCircle,ImCancelCircle]

export function CMVControls({currencryMap,coinArr,activeCoins,finalComp,
setFinalComp,setCoinArr,currency, setCurrency,buy,quickData,setQuickData,runOrStop,setRunOrStop,
currencySingular,currencyPlural}){

const [updateInterval,setUpdateInterval] = useState(1) 
const [minutes,setMinutes] = useState('Minute')
const [colorContBtns,setColorContBtns] = useState()
const [cmvAction,setCmvAction] = useState()
const [cmvErrorsx,setCmvErrorsx] = useState('Please add a crypto asset')
const [currentLang,setCurrentLang] = useState('en-US')
const [currentVoice, setCurrentVoice] = useState('Microsoft David - English (United States)')
const [replay, setReplay] = useState(true)
const [isPlaying, setIsPlaying] = useState(false)
//const [quickData, setQuickData] = useState(false)  

//const [runOrStop,setRunOrStop] = useState(true)

const [counta, setCounter] = useState(0)

const timeInterval = useRef(null)
const minutesField = useRef(null)
const controlButtons= useRef([])
const gooo = useRef(null)
const stopUdatingInfo = useRef()
const cmvErrorsxHolder = useRef(null)




const changeControlBtnColor = (c)=>{
    setColorContBtns(c)
}

let allLang = ['ar-SA', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en', 'en-AU', 'en-GB', 'en-IE', 'en-IN', 'en-US', 'en-ZA', 'es-AR', 'es-ES', 'es-MX', 'es-US', 'fi-FI', 'fr-CA', 'fr-FR', 'he-IL', 'hi-IN', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'ko-KR', 'nb-NO', 'nl-BE', 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sk-SK', 'sv-SE', 'th-TH', 'tr-TR', 'zh-CN', 'zh-HK', 'zh-TW',
]

const fixMinutes = ()=>{
if(timeInterval.current.value > 1){
setMinutes('Minutes') 
}
else{
setMinutes('Minute')  
}
}

const hideMinutesField = ()=>{
minutesField.current.style.display = 'none'

}

const showMinutesField = ()=>{
if(timeInterval.current.value !== ''){
minutesField.current.style.display = 'block'
}   
}

const updateTime = (t)=>{
setUpdateInterval(t.target.value)

}

const showCmvErrorsx = (msg)=>{
  cmvErrorsxHolder.current.style.display = 'block';
  setCmvErrorsx(msg)
}

const hideCmvErrorsx = ()=>{
  setCmvErrorsx('')
  cmvErrorsxHolder.current.style.display = 'none';
  
}


useEffect(()=>{
  hideCmvErrorsx()

    if(timeInterval.current.value !== '' && timeInterval.current.value > 0 && buy.length > 0 && quickData){
    const cryptoUrlQuick = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLocaleLowerCase()}&ids=${buy.toString()}
    &order=market_cap_desc&per_page=1&page=1&sparkline=false`
    axios.get(cryptoUrlQuick).then((res)=>{setCoinArr(res.data)}).then(()=>{}).catch((err)=>{showCmvErrorsx('Unsuported currency')})
   
  }

 setQuickData(false)
},[quickData])






var realTimeUpdate = updateInterval * 60000

const recompArr = []

useEffect(()=>{
  hideCmvErrorsx()
const getLatestCoinInfo = setInterval(()=>{
    if(runOrStop && timeInterval.current.value !== '' && timeInterval.current.value > 0 && buy.length > 0 ){
    var date = new Date()
    var teeest = date.getMinutes()
    const cryptoUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLocaleLowerCase()}&ids=${buy.toString()}
    &order=market_cap_desc&per_page=1&page=1&sparkline=false`
    axios.get(cryptoUrl).then((res)=>{setCoinArr(res.data)}).then().catch((err)=>{console.log(err); showCmvErrorsx('No internet connection')})
    
 
  }
  else{
    const endUpdate = clearInterval(getLatestCoinInfo)
    showCmvErrorsx('Updates are on hold, press play');
    

  }
  },realTimeUpdate)
  return ()=> clearInterval(getLatestCoinInfo)
},[timeInterval.current,buy,counta,runOrStop])


  const currencyInfo = {
    style:"currency",
    currency:currency.toUpperCase()
  }

 

  const composeMsg = ()=>{
    var date = new Date()
    //var teeest =  date.getHours()  + ' : ' + date.getMinutes()
    let allNews  =  coinArr.map((news)=>{ let priceFlow = Math.floor(news.current_price) > 1 ?  currencyPlural : currencySingular

      var composeInfo = news.name + ' is trading @ ' + news.current_price.toLocaleString() + ' ' + priceFlow +', with a price change of '+ news.price_change_percentage_24h.toFixed(1) + '%'
      var recomp = composeInfo.replace(/\./g,' point ')
      recompArr.push(recomp +' ' + ' ' + ' ' + ' '+ ' ')
    })
    setFinalComp(recompArr.toString()); 
    isPlaying && vCoin() 
    }

    useEffect(()=>{
        composeMsg()
        },[coinArr,replay])

  const clearTime = ()=>{

  }

if(typeof window !== 'undefined'){
    var speech = new Speech() // will throw an exception if not browser supported
   
    if(speech.hasBrowserSupport()) { // returns a boolean
        //console.log("speech synthesis supported")
    }

    speech.init({
      volume: 1,
      lang: currentLang,
      rate: 1,
      pitch: 1,
     //'voice':currentVoice,
      'splitSentences': false,
      listeners: {
        onvoiceschanged: (voices) => {

        }
      }
    })
    .then((data) => {
      
    })
    .catch((e) => {
    setCmvErrorsx("An error occurred :", e)
    });


  }
   



  function vCoin() {
    
    hideCmvErrorsx();
   
   // ()=>speech.setLanguage(currentLang);
   // ()=>speech.setVoice(currentVoice)
   //quickData? setQuickData(false) : '';
   setIsPlaying(true);
   setRunOrStop(true);

     speech.speak({
          text: finalComp.toString(),
          queue: true,
          listeners: {
            onstart: () => {
              setCmvAction("Playing...");
              
            },
            onend: () => {
              setCmvAction("Thanks 4 Listening")
            },
            onresume: () => {
             setCmvAction("Resumed")
            },
            onpause: () => {
                setCmvAction("Paused...");
               
          
            },
          
            onboundary: (event) => {
            /*
              console.log(
                event.name +
                  " boundary reached after " +
                  event.elapsedTime +
                  " milliseconds."
              );
              */
            }
          }
        })
        .then((data) => {
         
        })
        .catch((e) => {
          setCmvErrorsx("An error occurred :", e)
        });speech.resume();
       
     }





   const fixCurrency = (currency)=>{
    setCurrency(currency)
   }
   const updateCurrency = useEffect(()=>{
    
    },[currency])

    const newTime = (t)=>{
    setUpdateInterval(t.target.value);
  
    }

    const updateNewTime = useEffect((t)=>{
    
    },[updateInterval])

    const pause = ()=>{
      setRunOrStop(false);
      speech.pause();
      setIsPlaying(false)
    }

    const stop = ()=>{
      speech.cancel();
      setIsPlaying(false)
      //setRunOrStop(false);
      //setQuickData(true);
    }
  
    const startSpeaking = ()=>{
     !runOrStop? setRunOrStop(true) : '';
     }

   
    
return(
<>

{/*<div>{updateInterval} | {realTimeUpdate} | {counta} | {replay} </div>*/}
<div className={styles.CMVControls}>
<div className={styles.CMVControls_main}>
<p className={styles.cmv_device_play_error} ref={cmvErrorsxHolder}>{cmvErrorsx}</p>
<div className={styles.CMVControls_main1}>
<div className={styles.CMVControls_main1_playPause}>
<div className={styles.CMVControls_main1_btns}> 

{

controlIcons.map((icon,index)=>{
    const Iconf = icon;

    return <Iconf key = {icon+index}   id = {colorContBtns === index ?  styles.secondCbtnColor : styles.firstCbtnColor} onClick={(c)=>{changeControlBtnColor(index);  index === 0 && vCoin(); index === 1 && pause(); index === 2 && stop()}}   />
  

})
} 
</div>
<div className={styles.CMVControls_main1_notification}>{cmvAction}</div>
</div>
<div className={styles.CMVControls_main1_inputControl}>
<div className={styles.CMVControls_main1_updateTxt}>
<div>Update</div>
<div>Every</div>
</div>
<div className={styles.CMVControls_main1_input_time}>
<input type='number' title='You can change the value' defaultValue= {updateInterval}   className={styles.CMVControls_main1_input_box} ref = {timeInterval}  onChange={(t)=>{newTime(t);fixMinutes();setRunOrStop(false)}} onMouseOver = {hideMinutesField} onMouseLeave = {showMinutesField} onBlur={()=>{hideCmvErrorsx();setQuickData(true)}} /></div>
<p className={styles.CMVControls_main1_minute} ref = {minutesField}>{minutes}</p>
</div>
</div>
</div> 
</div>
    
</>
)
}