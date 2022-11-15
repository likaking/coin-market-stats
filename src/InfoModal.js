import React, {Suspense, useState,useEffect,useRef,useLayoutEffect,useCallback,useMemo} from 'react';
import Home from '../pages/index.js'
import {data1,Speech} from '../pages/index.js'
import axios from 'axios'
import styles from '../styles/InfoModal.module.css'
import {FaCaretDown,FaCaretUp,FaTrashAlt,FaStar,FaInfoCircle,FaWindowClose,FaTimes,FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import {addCoin,buy,activeCoins,AddCrypto,coinIsexistinErr} from '../src/addcoin.js'



export default function InfoModal({openModal,setOpenModal,activeCoins,setActiveCoins,modalSearch,setModalSearch,currencySymbol,setCurrencySymbol,index,setIndex}){




    const modalContainer = useRef(null)
    const priceAlertz = useRef(null);
    const note = useRef(null);
    const searchBox = useRef(null);
    const [feedModalSearch,setFeedModalSearch] = ([activeCoins[index]])
    const [swipe,setSwipe] = useState(false)

    const closeModal = ()=>{
     setOpenModal(false); 
     searchBox.current.value = ''
    }
   
    useEffect(()=>{
    openModal? modalContainer.current.style.display = 'block': modalContainer.current.style.display = 'none'
    },[openModal])

    let filterArr = [...activeCoins]

    const searchResult = openModal && filterArr.filter((cryptoGems)=>{
    return cryptoGems.symbol.includes(modalSearch.toLowerCase())
    })
    
   
    const leftButton = ()=>{
     setSwipe(true)
     setIndex(index  -= 1);
    }

    const rightButton = ()=>{
    setIndex(index += 1);
    setSwipe(true)
       }

  useEffect(()=>{

 if(index  > activeCoins.length-1 ){
    setIndex(0) ;
    
 }
 else if(index < 0){
    setIndex(activeCoins.length - 1) 
 }

  },[index])

 //For controlling the scroll of the slider
  useEffect(()=>{
    index >= 0 && index < activeCoins.length && [feedModalSearch]?.map((coinz)=> setModalSearch(coinz.symbol))
},[index])


const UpdateInfo = (gemId,note,priceAlertz,priceAlertzActive)=>{

 
 const updateMyInfo =  activeCoins.map((myGemz)=>{
  if(myGemz.id === gemId){
    return {...myGemz,note:note,priceAlertz:priceAlertz.length !== 0? Number(priceAlertz): '',priceAlertz_active:priceAlertz.length !== 0? true: false}
  }
  return myGemz
  })

 setActiveCoins(updateMyInfo)
 
 console.log(activeCoins)
}



var coinImage;
var coinName;
var coinSymbol;
var coinPrice;
var coinId
var coinnote;
var coinPriceAlertz;
var coinIndex;

return(
<>

<div className={styles.modalContainer} ref={modalContainer}>
<div className={styles.modalClose} ><FaTimes  onClick={closeModal} /></div> 
<div className={styles.modal_inner}>
<input className={styles.modal_inner_serach} type='text' placeholder='search:eg xtz' onChange={(e)=>{setModalSearch(e.target.value)}} ref={searchBox} />
{
openModal? searchResult.map((gem,indexx)=>{
  coinImage = gem.image;
  coinName = gem.name;
  coinSymbol = gem.symbol.toUpperCase();
  coinPrice = gem.current_price;
  coinId = gem.id;
  note.current.innerHTML = gem.note;
  priceAlertz.current.innerText = Number(gem.priceAlertz);
  coinIndex = indexx
    
    return(


<></>
    )
}): null

}
<form>

<div className={styles.modal_inner_coinzInfo} > <div className={styles.modal_inner_imgCont}> <img src={coinImage} alt = '' className={styles.modal_inner_img} /></div> <div className={styles.modal_inner_gemName}>{coinName} {' '} <span className={styles.modal_inner_gemSymbol}>{coinSymbol}</span></div> <div className={styles.modal_inner_gemPrice}>{'$'}{coinPrice}</div></div>
<div className={styles.modal_inner_textArea_constianer}>
<div className={styles.modal_inner_textArea} contentEditable='true'   ref={note} >{coinnote} </div>
<div className={styles.modal_inner_LRcontrolBtns}><span className={styles.modal_inner_LRcontrolBtns_L}><FaArrowAltCircleLeft  onClick={()=>leftButton()} /></span> <span className={styles.modal_inner_LRcontrolBtns_R}><FaArrowAltCircleRight onClick={()=>rightButton()} /></span> </div>
</div>

<div className={styles.modal_inner_price} ><div className={styles.modal_inner_MoneySymbol} >$</div><div  className={styles.modal_inner_priceAlertz}  contentEditable='true' ref={priceAlertz}> </div></div>
<div className={styles.modal_inner_buttonCont} ><button type='button' className={styles.modal_inner_button} onClick={()=>{UpdateInfo(coinId,note.current.innerText,priceAlertz.current.innerText)}}>update info</button></div>
</form>
</div>
</div>
</>
)
}