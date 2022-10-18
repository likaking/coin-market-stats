import React, {Suspense} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaCircle} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import {FaShoppingBag} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import {FaDiceTwo,FaListOl,FaListUl,FaHeart,FaCoffee} from 'react-icons/fa'
import {FaGripLines} from 'react-icons/fa'
import {FaPlusCircle} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'
import {FaDollarSign} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import {FaQuoteLeft} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaStopwatch20} from 'react-icons/fa'
import {FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaCopyright, FaArrowUp, FaArrowRight, FaUserFriends,FaShoppingBasket,FaHamburger} from 'react-icons/fa'
import { useState,useEffect } from 'react';
import Header from './header/header.js';




//import { Button, Text } from '@material-ui/core';


//import Footer from './footer/footer.js'

const Footer = React.lazy(()=> import('./footer/footer.js'))


const productList = [[{burgerName:'Smoked Brisket',description:'Pulled Pork, Beer Braise Bisket, & Quarter',price:'$40',orderNowLink:'/#',burgerPix:'/coolBurger5.png'},
  {burgerName:'Buffalo Ranch',description:'Pulled Pork, Beer Braise Bisket, & Quarter', price:'$35',orderNowLink:'/#',burgerPix:'/coolBurger6.png'},
  {burgerName:'BBQ Burger',description:'Pulled Pork, Beer Braise Bisket, & Quarter', price:'$28',orderNowLink:'/#',burgerPix:'/blackBurgerOnPaper.png'},
  {burgerName:'Big Hotie',description:'Pulled Pork, Beer Braise Bisket, & Quarter', price:'$30',orderNowLink:'/#',burgerPix:'/bugerOnPaper.png'},
  ],
  [{burgerName:'Burger Baby',description:'Pulled Pork, Beer Braise Bisket, & Quarter',price:'$32',orderNowLink:'/#',burgerPix:'/coolBurger1.png'},
  {burgerName:'Burgerlicious',description:'Pulled Pork, Beer Braise Bisket, & Quarter', price:'$35',orderNowLink:'/#',burgerPix:'/coolBurger11.png'},
  {burgerName:'The Burgery',description:'Pulled Pork, Beer Braise Bisket, & Quarter', price:'$40',orderNowLink:'/#',burgerPix:'/coolBurger7.png '},
  {burgerName:'Meat and Greet',description:'Pulled Pork, Beer Braise Bisket, & Quarter', price:'$30',orderNowLink:'/#',burgerPix:'/coolBurger3.png'},
  ],
  [{burgerName:'Mangia Tutto',description:'Pulled Pork, Beer Braise Bisket, & Quarter',price:'$30',orderNowLink:'/#',burgerPix:'/coolBurger9.png'},
  {burgerName:'Buffalo Ranch',description:'Pulled Pork, Beer Braise Bisket, & Quarter', price:'$25',orderNowLink:'/#',burgerPix:'/coolBurger12.png'},
  {burgerName:'Fire Burger',description:'Pulled Pork, Beer Braise Bisket, & Quarter', price:'$22',orderNowLink:'/#',burgerPix:'/coolBurger5.png'},
  {burgerName:'Buckhorn Burger',description:'Pulled Pork, Beer Braise Bisket, & Quarter', price:'$40',orderNowLink:'/#',burgerPix:'/satakedburger.png'},
  ],
  
  ]
  
  const menu = [{menuItem:'BURGER', menuPix:'/burgerIcon.png',active:'activeMenu',},
  {menuItem:'PIZZA', menuPix:'pizza.png',active:false},
  {menuItem:'CHICKEN', menuPix:'chicken.png',active:false},
  {menuItem:'BEVERAGES', menuPix:'/beverages.png',active:false},
  {menuItem:'COFFEE', menuPix:'/coffe.png',active:false}]

  const menuContents = [
    [
      {menuName:'Smoked Brisket Sandwich',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$39`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Pulled Chicken Sandwich',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$12`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Ocean Spray Cranbery Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$39`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'6 Piece Mozzarella sticks',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$30`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Martinellis Apple Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$19`,recomended:false,new:true,menuUrl:'/#'},
      {menuName:'Peanutty Blast Smothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$18`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Mango Mania Smoothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$25`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Canada Dry Ginger Ale',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$35`,recomended:false,new:true,menuUrl:'/#'},
     ],
     [
      {menuName:'Smoked Brisket Pizza',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$31`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Pulled Chicken Sandwich',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$22`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Ocean Spray Cranbery Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$35`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'6 Piece Mozzarella sticks',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$30`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Martinellis Apple Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$23`,recomended:false,new:true,menuUrl:'/#'},
      {menuName:'Peanutty Blast Smothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$18`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Mango Mania Smoothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$19`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Canada Dry Ginger Ale',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$30`,recomended:false,new:true,menuUrl:'/#'},
     ],
     [
      {menuName:'Smoked Brisket Chicken',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$30`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Pulled Chicken Sandwich',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$22`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Ocean Spray Cranbery Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$19`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'6 Piece Mozzarella sticks',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$20`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Martinellis Apple Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$29`,recomended:false,new:true,menuUrl:'/#'},
      {menuName:'Peanutty Blast Smothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$28`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Mango Mania Smoothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$20`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Canada Dry Ginger Ale',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$25`,recomended:false,new:true,menuUrl:'/#'},
     ],
     [
      {menuName:'Smoked Brisket Beverage',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$29`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Pulled Chicken Sandwich',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$32`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Ocean Spray Cranbery Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$33`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'6 Piece Mozzarella sticks',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$30`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Martinellis Apple Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$19`,recomended:false,new:true,menuUrl:'/#'},
      {menuName:'Peanutty Blast Smothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$28`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Mango Mania Smoothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$20`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Canada Dry Ginger Ale',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$35`,recomended:false,new:true,menuUrl:'/#'},
     ],
     [
      {menuName:'Smoked Brisket Coffee',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$30`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Pulled Chicken Sandwich',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$22`,recomended:true,new:false,menuUrl:'/#'},
      {menuName:'Ocean Spray Cranbery Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$39`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'6 Piece Mozzarella sticks',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$30`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Martinellis Apple Juice',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$29`,recomended:false,new:true,menuUrl:'/#'},
      {menuName:'Peanutty Blast Smothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$18`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Mango Mania Smoothie',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$45`,recomended:false,new:false,menuUrl:'/#'},
      {menuName:'Canada Dry Ginger Ale',menuDescription:'Pulled Pork, Beer Braise Bisket, & Quarter Racks of Ribs served with your chioce of side',menuProductPrice:`$25`,recomended:false,new:true,menuUrl:'/#'},
     ],
    
    ]

    const FoodAD =[{id:1,foodNameA:'The Japanese',foodNameB:'Oshii Burger',price : '$'+12, foodPix: 'coolBurger10.png', 
    adTittle:'THIS MONTHS SPECIAL', OrderBtn:'ORDER NOW',foodAdUrl:'/#', promo: false,  promoPriceAmount:'$'+15.99 ,promoPriceFrameColor:false,promoTextColor:false,discountTextColor:false,
    discount:false, discountPrecentage:60+'%',bgColor:'rgba(250, 127, 11, 0.959)', priceTextColor:false,priceBgColor:'rgb(241, 32, 32)',
    circleColor:'rgba(241, 188, 42, 0.925)',foodNameTextColor:'rgb(250, 245, 245)', largeCircleBgColor:'rgba(241, 188, 42, 0.925)',
    adTittletextColor:'rgb(250, 245, 245)',OrderBtnTextColor:false},

    {id:2,foodNameA:'Burger With',foodNameB:'Benefits',price : '$'+12, foodPix: 'fatburger.png', 
    adTittle:'THIS MONTHS SPECIAL', OrderBtn:'ORDER NOW',foodAdUrl:'/#', promo: true, promoPriceAmount:'$'+15.99 ,promoPriceFrameColor:false,promoTextColor:false,discountTextColor:false,
    discount:false, discountPrecentage:60+'%',bgColor:'rgb(252, 183, 33)', priceTextColor:false,priceBgColor:'rgb(241, 32, 32)',
    circleColor:'rgba(241, 188, 42, 0.925)',foodNameTextColor:'rgb(250, 245, 245)', largeCircleBgColor:'rgb(240, 50, 50)',
    adTittletextColor:'rgb(27, 26, 26)',OrderBtnTextColor:'rgb(27, 26, 26)'},

    {id:3,foodNameA:'Fatboy',foodNameB:'Combo',price : '$'+12, foodPix: 'buggerzz.png', 
    adTittle:'OFFER', OrderBtn:'ORDER NOW',foodAdUrl:'/#', promo: false, promoPriceAmount:'$'+15.99 ,promoPriceFrameColor:'rgb(250, 245, 245)',promoTextColor:false,discountTextColor:false,
    discount:true, discountPrecentage:60+'%',bgColor:'rgb(240, 50, 50)', priceTextColor:false,priceBgColor:'rgb(26, 25, 25)',
    circleColor:'rgba(241, 188, 42, 0.925)',foodNameTextColor:'rgb(250, 245, 245)', largeCircleBgColor:'rgba(241, 188, 42, 0.925)',
    adTittletextColor:'rgb(255, 193, 59)',OrderBtnTextColor:'rgb(255, 193, 59)'},

    {id:4,foodNameA:'Hotgirl',foodNameB:'Delight',price : '$'+12, foodPix: 'vegburger.png', 
    adTittle:'OFFER', OrderBtn:'GET NOW',foodAdUrl:'/#', promo: false, promoPriceAmount:'$'+15.99 ,promoPriceFrameColor:'rgb(255, 193, 59)',promoTextColor:false,discountTextColor:false,
    discount:true, discountPrecentage:70+'%',bgColor:'rgb(43, 40, 40)', priceTextColor:false,priceBgColor:'rgb(26, 25, 25)',
    circleColor:'rgba(241, 188, 42, 0.925)',foodNameTextColor:'rgb(250, 245, 245)', largeCircleBgColor:'rgb(255, 193, 59)',
    adTittletextColor:'rgb(255, 193, 59)',OrderBtnTextColor:'rgb(255, 193, 59)'},

    {id:5,foodNameA:'Burger',foodNameB:'Bazar!',price : '$'+12, foodPix: 'buggerBeefed.png', 
    adTittle:'BUY ALL', OrderBtn:'ORDER NOW',foodAdUrl:'/#', promo: false, promoPriceAmount:'$'+15.99 ,promoPriceFrameColor:'rgba(243, 230, 42, 0.925)',promoTextColor:false,discountTextColor:false,
    discount:true, discountPrecentage:90+'%',bgColor:'rgb(250, 84, 33)', priceTextColor:false,priceBgColor:'rgb(26, 25, 25)',
    circleColor:'rgba(241, 188, 42, 0.925)',foodNameTextColor:'rgb(250, 245, 245)', largeCircleBgColor:'rgba(243, 230, 42, 0.925)',
    adTittletextColor:'rgba(243, 230, 42, 0.925)',OrderBtnTextColor:'rgba(243, 230, 42, 0.925)'},
   ]

       const burgerNews = [{tittle:'Labour dapper rules', info:'Lorem ipsum dolor sit amet, conse ipsum dolor sit.', usser:'WPTWUSSER', date:'10, OCT 2020',pix:'/blackBurger.jpg'},
{tittle:'New resturant town', info:'Lorem ipsum dolor sit amet, conse ipsum dolor sit.', usser:'WPTWUSSER', date:'10, OCT 2020',pix:'/burgerNchips2.jpg'},
{tittle:'Starbucks invest $100M', info:'Lorem ipsum dolor sit amet, conse ipsum dolor sit.', usser:'WPTWUSSER', date:'10, OCT 2020',pix:'/burger1.jpg'}]

const gallery = ['/gallary1.jpg','/gallary2.jpg','/gallary3.jpg','/bugera.jpg','/burgerNchips.jpg','/twoburger.PNG']



export default function Home() {

  const [activeMenu, setActiveMenu] = useState(true);

  const [activeColor, setActiveColor] = useState('rgb(241, 32, 32)')

  const [ourMenu, setOurMenu] = useState(menuContents[0]) 
 
 const dateBuilder = (d)=>{
        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let days = ["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"]

      let today = days[d.getDay()];
      let c_day = d.getDate();
      let currMounth = months[d.getMonth()];
      let year = d.getFullYear();
      return ` ${year} `
      }
      
  let chioce;
  const changeColors = (e)=>{
    setActiveMenu(false);
    e.target.style.color = activeColor
    setActiveColor('')
  }
   //Add transition

const [transition, setTransition] = useState(false)

  //left and right arrow control function for special combo burgers

  const [arrayIndex, setArrayIndex] = useState(0)
  const [ourProductList, setOurProductList] = useState(productList[0])
  const [numOfProducts, setNumOfProducts] = useState(productList.length);
  const [currentProducts, setCurrentProducts] = useState(1);


  const rightArrow = ()=>{
    setArrayIndex(arrayIndex += 1)
    arrayIndex >= productList.length && setArrayIndex(arrayIndex = 0); 
    setOurProductList(productList[0 + arrayIndex]);
    setCurrentProducts(currentProducts += 1);
    currentProducts > productList.length && setCurrentProducts(currentProducts = 1);
    setTransition(true)
    setTimeout(()=>{
    setTransition(false)
    },900)
  }

  const leftArrow = ()=>{
    setArrayIndex(arrayIndex -= 1)
    arrayIndex < 0 && setArrayIndex(arrayIndex = productList.length-1) 
    setOurProductList(productList[arrayIndex]);
    setCurrentProducts(currentProducts -= 1);
    currentProducts < 1 && setCurrentProducts(currentProducts = productList.length);
    setTransition(true)
    setTimeout(()=>{
    setTransition(false)
    },1000)
  }
 

// Menu selectors and transition
const [redMenuActive,SetRedMenuActive] = useState(0)
const menuPick = (i)=>{
  setOurMenu(i)
}

const menuToRed = (i)=>{
  SetRedMenuActive(i)
}







  return (
    <div className={''}>
      
      <Head>
        <title>Burger Den</title>
        <meta name="Burger Den" content="Burger Den" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main >
      
      <div className={styles.container}>
        
      <div className={styles.FaCircleNotch}><FaCircle /></div>
      <div className={styles.FaCircleNotch2}><FaCircle /></div>
       <div className={styles.contents}>
        <div className={styles.navLogoContainer} >
       <nav className={styles.menu}>
       <button className={styles.onlineOrder__btn_small}><Link href='/#'  passHref><a>ONLINE ORDER</a></Link></button>
        <ul>
          <li ><Link href='/#'  passHref><a>HOME</a></Link></li>
          <li><Link href='/#'  passHref><a>MENU</a></Link></li>
          <li><Link href='/#'  passHref><a>ONLINE ORDER</a></Link></li>
          <li><Link href='/#'  passHref><a>SHOP</a></Link></li>
          <li><Link href='/#'  passHref><a>CONTACT</a></Link></li>
          
        </ul>
       </nav>
      <div className={styles.logo}><Link href='/#'  ><a><img src={'cheflogo.png'} className={styles.logoImage} alt='Company Logo' loading='lazy'/></a></Link></div>
      <button className={styles.onlineOrder__btn}><Link href='/#'  passHref><a>ONLINE ORDER</a></Link></button>
      <div className={styles.shopingIconContainer}>
      <Link href = '/#'><a><FaShoppingCart className={styles.shopingIcon}/>
      <div className={styles.shopingBadge}>0</div></a></Link>
      </div>
      <button className={styles.secondMenu} ><FaDiceTwo className={styles.dice}/>{' '}<FaHeart className={styles.dice}/>{' '}<FaBars className={styles.listMenu} /></button>
       </div>
       <div className={styles.bannerContents}>
        <div className={styles.bannerContents_L}>
          <div className={styles.bannerContents_L_A}>NEW IN MENU  {''} </div>
          <div className={styles.bannerContents_L_B}>DOUBLE <br /> MUSHROOM <br /> BURGER</div>
          <div className={styles.bannerContents_L_C}>
            <div className={styles.bannerContents_L_C_li}>
              <ul>
                <li>Beacon</li>
                <li>Cheese</li>
                <li>Mushroom</li>
              </ul>
            </div>
            <div className={styles.bannerContents_L_C_price}>
            <div className={styles.bannerContents_L_C_only}>Only</div>
            <div className={styles.bannerContents_L_C_price_B}><span className={styles.bannerContents_L_C_price_B_span} >$15.99</span></div>
            </div>
            <FaPlusCircle className={styles.bannerContents_L_C_price_plus}/><FaCircle className={styles.bannerContents_L_C_price_plusB}  />
          </div>
        </div>
        <div className={styles.bannerContents_R}>
          <div className={styles.bannerContents_R_imgContainer}>
          <div className={styles.bannerContents_R_imgContaineMain}>
          <img src='beefburger.png' className={styles.bannerContents_R_img} alt ='beefburger'  loading = 'lazy' />
          </div>
          </div>
        </div>
       </div>
       </div>
       <div className={styles.liquidBg} ><img src ={'/liquidBg.png'} alt = 'liquidBg' loading = ''/></div>
        <div className={styles.bd1} ><img src ={'/liqBg.png'} alt = 'liqdBg' loading = 'lazy'/></div>
        <div className={styles.bd2} ><img src ={'/bd.png'}  alt = 'bd' loading = 'lazy'/></div>
      </div>
      
      <Suspense  fallback = {<div>Loading Welcome Msg...</div>}>
      <section>
      <div className={styles.welcome} >
        <div className={styles.welcome__BgImageContainer}>
          <img src = {'/burger.png'} alt='burger' className={styles.welcome__BgImage} loading = 'lazy' /> 
        </div>
        <div className={styles.welcome__ContentsContainer}>
          <div className={styles.welcome__ContentsContainer_L}>
            <div className={styles.welcome__ContentsContainer_L_welcome}>WELCOME</div>
            <div className={styles.welcome__ContentsContainer_L_bestBurger}>We make the <br /> best burger <br /> in town</div>
            <p className={styles.welcome__ContentsContainer_L_P}>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisc elit.</p>
            <div><Link href = '/#' scroll = {false}><a><button className={styles.welcome__ContentsContainer_L_Button}><FaUserFriends className={styles.welcome__ContentsContainer_L_BtnIcon}/><span className={styles.welcome__ContentsContainer_L_More}>MORE ABOUT US</span></button></a></Link></div>
          </div>
          <div className={styles.welcome__ContentsContainer_R}>
            <div className={styles.welcome__ContentsContainer_R__imgHolder}>
            <img src={'/pepsiburger.png'}  alt='Advert' className={styles.welcome__ContentsContainer_R__img} loading = 'lazy'/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.specialsCombo_container}>
      <div className={styles.specialsCombo_container_A}>SPECIALS COMBO</div>
      <div className={styles.specialsCombo_container_B}>Our delicious <br />burgers</div>
      </div>
      
      <div className={styles.specialsCombo__sliderContainer}>
        <div className={styles.specialsCombo__sliderProducts}>
        {ourProductList.map((product,index)=>
          <div className={styles.specialsCombo__sliderProducts_Container}  id = {transition ? '' : ' '}  key={'ourProductList' + index}>
          <div className={styles.specialsCombo__sliderProducts_Container_A} key={product.burgerName + index}>{product.burgerName}</div>
          <div className={styles.specialsCombo__sliderProducts_Container_B} key={product.description + index}>{product.description}</div>
          <div className={styles.specialsCombo__sliderProducts_Container_C} >
           <span className={styles.specialsCombo__sliderProducts_Container_C_price} key={product.price + index}><span className={styles.dollarSign} >{product.price}</span></span></div>
          <div className={styles.specialsCombo__sliderProducts_Container_D} key={`product.orderNowLink + index` }><Link href = {product.orderNowLink} scroll = {false}><a><button className={styles.specialsCombo__sliderProducts_Container_D_Btn}><FaShoppingCart /> ORDER NOW</button></a></Link></div>
          <div className={styles.specialsCombo__sliderProducts_Container_E}>
            <img src={product.burgerPix} alt = 'Burger' loading='lazy' className={styles.specialsCombo__sliderProducts_Container_img} key={product.burgerPix + index} />
          </div>
          </div>
          
         
        )}
        </div>
        <div className={styles.specialsCombo__sliderArrows}>
         <div className={styles.specialsCombo__sliderArrows_L}><FaArrowAltCircleLeft onClick={leftArrow} /></div> 
         <div className={styles.specialsCombo__sliderArrows_R} ><FaArrowAltCircleRight onClick={rightArrow} /></div>
          </div>
          <div className={styles.ComboNum}>{currentProducts}/{numOfProducts}</div>
      </div>
      </section>
      </Suspense>
       
      <Suspense  fallback = {<div>Loading Ad...</div>}>
      <section>
        <div className={styles.burgerAds} ></div>
      </section>
      </Suspense>


      <Suspense  fallback = {<div>Loading Menu...</div>}>
      <section>
        <div className={styles.menuContainer} >
        <div className={styles.menuContainer__A}>MENU</div>
        <div className={styles.menuContainer__B}>Choose your combo <br /> {'&'} order now</div>
        </div>
     
		
        <div className={styles.menuItems_container}>
        {menu.map((chioce,index)=>
         <div className={styles.menuItems_container__inner}  key={'menu' + index}>
          <div className={styles.menuItems_container__inner_A} key = {chioce.menuPix + index}><img src = {chioce.menuPix} alt = {chioce.menuItem} loading='lazy'  className={styles.menuItems_container__inner_A__img}  onClick= {()=>{menuPick(menuContents[index]);menuToRed(index)}} /></div>
          <div className={styles.menuItems_container__inner_B}  key = {chioce.menuItem + index}  id ={redMenuActive === index ? styles.toRed : styles.tooBlack} onClick= {()=>{menuPick(menuContents[index]);menuToRed(index)}}   >{chioce.menuItem } </div>
         </div>
         )}
        </div>
       
        <div  className={styles.menuItems_Hr}><hr /></div>
        
        <div className={styles.menuIBox}> 
          
          {ourMenu.map((order,index)=>
        
       <div className={styles.menuIBox__ItemsContainer} key = {'menu'+ index} >
         <div className={styles.menuIBox__buttons} key = {'newRecomm'+index}>{order.recomended && <button className={styles.menuIBox__buttons_recom}>RECOMENDED</button>}{order.new && <button className={styles.menuIBox__buttons_new}>NEW</button>}</div>
         <div className={styles.menuIBox__nameNprice} key = {'menuName'+index}><Link href =  {order.menuUrl} scroll = {false}><div className={styles.menuIBox__menuName}>{order.menuName}<span className={styles.menuDots}>············································································································</span></div></Link> <div className={styles.menuIBox__price}><span className={styles.dollarSign} >{order.menuProductPrice}</span></div></div>
         <div className={styles.menuIBox__MenuDescription} key = {order.menuDescription+index}>{order.menuDescription}</div>
         </div>
      
         )}

        </div>
     
	   <div className={styles.orderNowGallary}>
      { FoodAD.map((item,index)=>

        <div className={item.id <= 2 ?  styles.orderNowGallary_container : styles.orderNowGallary_container2} style = {{backgroundColor:item.bgColor}}key = {'FoodAD'+ index} >
      
    <div className={ item.id <= 2 ? styles.orderNowGallary_container_A : styles.orderNowGallary_container_A2XXX}   >
	
    <div className={styles.orderNowGallary_container_A1}> </div>
   
    {item.promo ?
    <div  className={item.id > 2 ? styles.orderNowGallary_promo1BXXX : styles.orderNowGallary_promo1 } >
      <div className={styles.orderNowGallary_promo1A} style = {{backgroundColor:item.bgColor}}>{item.promoPriceAmount}</div>
     <div className={styles.orderNowGallary_promo1B} style = {{color: item.promoTextColor ? item.promoTextColor : item.foodNameTextColor}}>FROM </div><div className={styles.orderNowGallary_promo1C} style ={{borderColor: !item.promoPriceFrameColor? item.adTittletextColor : item.promoPriceFrameColor  }}></div>
     </div>
     : '' }
      {item.discount ?
    <div  className={item.id > 2? styles.orderNowGallary_promo2BXXX : styles.orderNowGallary_promo2}>
    <div className={styles.orderNowGallary_promo2B} style = {{color: item.promoTextColor ? item.promoTextColor : item.foodNameTextColor}}>OFF </div>
    <div className={styles.orderNowGallary_promo2A } style = {{backgroundColor:item.bgColor, color: !item.promoTextColor ?  item.foodNameTextColor : item.promoTextColor}}> {item.discountPrecentage} </div><div className={styles.orderNowGallary_promo2C}  style ={{borderColor: !item.promoPriceFrameColor? item.adTittletextColor : item.promoPriceFrameColor  }}></div>
    </div>
      : ''}
		<div className={styles.orderNowGallary_container_A2} style = {{color: !item.adTittletextColor? item.foodNameTextColor : item.adTittletextColor }}>{item.adTittle}</div>
		<div className={styles.orderNowGallary_container_A3} ><span style = {{color:item.foodNameTextColor}}>{item.foodNameA}<br />{item.foodNameB}</span></div>
		<div className={styles.orderNowGallary_container_A4} style = {{color: !item.OrderBtnTextColor? item.foodNameTextColor : item.OrderBtnTextColor }}>
      <span className={styles.orderNowText} style = {{color: !item.OrderBtnTextColor? item.foodNameTextColor : item.OrderBtnTextColor }} ><a href = {item.foodAdUrl} scroll = {false}>{item.OrderBtn}</a></span> <span>{''}</span> </div>
    </div>
		<div className={item.id <= 2 ? styles.orderNowGallary_container_B : styles.orderNowGallary_container_B2XXX} >
		<div className={styles.orderNowGallary_container_B_circle} style = {{backgroundColor: item.largeCircleBgColor}}>
		<div className={styles.orderNowGallary_container_B_pixContainer}><img src = {item.foodPix} alt={item.foodNameA + ' ' + item.foodNameB} loading='lazy' className={styles.orderNowGallary_container_B_pix}/></div>
	  {item.id === 1 && <div className={styles.orderNowGallary_container_B_circleSmall} style = {{backgroundColor:item.priceBgColor, color: !item.priceTextColor ? item.foodNameTextColor : item.priceTextColor  }} >{item.price}</div>}
    {item.id === 3 && <div className={styles.orderNowGallary_container_B_circleSmall2} style = {{backgroundColor:item.priceBgColor, color: !item.priceTextColor ? item.foodNameTextColor : item.priceTextColor  }}>{item.price}</div>}
  	</div>
		</div>
		</div>
      
     )}
    </div>
      </section>
      </Suspense>
       
      <Suspense  fallback = {<div>Loading Delivery and Reward...</div>}>
      <section>
         <div className={styles.deliveryNrewardContainer} >
      <div className={styles.deliveryNreward_bgImageHolder} ><img src = {'/flyingburger2.png'} className={styles.deliveryNreward_imageHolder} alt='flyingburger' loading = 'lazy'/></div>
         <div className={styles.deliveryNrewardContainer_inner} >
         <div className={styles.deliveryNrewardContainer_Header} ></div>
         <div className={styles.deliveryNrewardContainer_Contents}>
         <div className={styles.deliveryNrewardContainer_ContentsA}>
          <div className={styles.deliveryNrewardContainer_Header_1}>DELIVERY</div>
          <div className={styles.deliveryNrewardContainer_ContentsA1}>
            Choose what <br /> you want, select <br /> a pick up time
          </div>
          <div className={styles.deliveryNrewardContainer_ContentsA2}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className={styles.deliveryNrewardContainer_ContentsA3}>
            <Link href = '/#' scroll = {false}><button className={styles.deliveryNrewardContainer_ContentsA3_Btn}><FaShoppingCart /> ORDER ONLINE</button></Link>
          </div>
         </div>
         <div className={styles.deliveryNrewardContainer_ContentsB}></div>
         <div className={styles.deliveryNrewardContainer_ContentsC}>
         <div className={styles.deliveryNrewardContainer_Header_2}>REWARD</div>
          <div className={styles.deliveryNrewardContainer_ContentsC1}>Earn points <br /> every time you <br />order online</div>
          <div className={styles.deliveryNrewardContainer_ContentsC2}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
          <div className={styles.deliveryNrewardContainer_ContentsC3}><Link href = '/#' scroll = {false}><button className={styles.deliveryNrewardContainer_ContentsC3_Btn}><FaPlusCircle /> LEARN MORE</button></Link></div>
          </div>
         </div>
          </div>
          <div className={styles.deliveryManPix}><img src = {'/deliveryBike.png'} alt = 'deliveryBike' loading = 'lazy' /></div>
        </div>
      </section>
      </Suspense>

      <Suspense  fallback = {<div>Loading Testimonial...</div>}>
      <section>
           <div>
         <div className={styles.testimonial}>TESTIMONIAL</div>
        <div className={styles.clientsReview}>Clients review </div>
        <div className={styles.clientsReview_container}>
          <div className={styles.clientsReview_containerA}>
          <div className={styles.clientsReview_containerA_L1}><img src={'/nina.png'}  alt = 'customer photo' className={styles.clientsReview_pix} loading = 'lazy'/></div>
          <div className={styles.clientsReview_containerA_R1}>
           <div><FaQuoteLeft /></div> 
           <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </div> 
           <div>Nina Magret</div> 
           <div>CEO British Airways</div> 
            </div>
          <div className={styles.clientsReview_containerA_L2}></div>
          <div className={styles.clientsReview_containerA_R2}></div>
          </div>
        </div>
       </div>
      </section>
      </Suspense>

      <Suspense  fallback = {<div>Loading Advert...</div>}>
      <div className={styles.burgerAd_bg}></div>
      </Suspense>

      <Suspense  fallback = {<div>Loading Gallery...</div>}>
      <section>
         <div className={styles.burgerGallery_Header}>GALLERY</div> 
    <div className={styles.burgerGallery_subHeader}>Burger gallery</div> 
    <div className={styles.burgerGallery_row}>
    <div className={styles.burgerGallery_container}>
      <div  className={styles.burgerGallery_fig}><img src = {gallery[0]} alt = 'gallery images1' loading = 'lazy' className={styles.burgerGallery_images} /></div>
      <div className={styles.burgerGallery_fig}><img src = {gallery[1]} alt = 'gallery images2' loading = 'lazy' className={styles.burgerGallery_images} /></div>
      <div className={styles.burgerGallery_fig}><img src = {gallery[2]} alt = 'gallery images3' loading = 'lazy' className={styles.burgerGallery_images} /></div>
      <div   className={styles.burgerGallery_fig + ' ' + styles.hide} ></div>
      <div  className={styles.burgerGallery_fig + ' ' + styles.hide}></div>
      <div className={styles.burgerGallery_fig}><img src = {gallery[3]} alt = 'gallery images4' loading = 'lazy' className={styles.burgerGallery_images} /></div>
      <div className={styles.burgerGallery_fig}><img src = {gallery[4]} alt = 'gallery images5' loading = 'lazy' className={styles.burgerGallery_images} /></div>
      <div className={styles.burgerGallery_fig}><img src = {gallery[5]} alt = 'gallery images6' loading = 'lazy' className={styles.burgerGallery_images} /></div>
    </div>
    </div>
      </section>
      </Suspense>

      <Suspense  fallback = {<div>Loading News...</div>}>
        <section>
          <div className={styles.news}>
      <div className={styles.bgHalf}></div>
      <div className={styles.news1}>NEWS</div>
      <div className={styles.news2}>This is all about <br /> burger</div>
      <div className={styles.newsBar_container}>
        { burgerNews.map((news,index) =>
        <div className={styles.newsBar}  key = {'burgerNews' + index}>
        <div className={styles.newsBarImg}><img src = {news.pix} alt = {news.pix} key = {news.pix+index} className={styles.newsBarImg_pix} loading = 'lazy' /></div>
        <div className={styles.newsBarDate}><span key = {news.usser+index}><FaUser />{' '}{news.usser}</span><span  key = {news.date+index}> <FaStopwatch20 />{' '}{news.date}</span></div>
        <div className={styles.newsBarTittle}  key = {news.tittle+index}>{news.tittle}</div>
        <div className={styles.newsBarBody}  key = {news.info+index}>{news.info}</div>
        <div className={styles.newsBarReadMore}>READ MORE <span style={{fontWeight:'normal', fontSize:'1.2em'}}>{'> '}</span></div>
        </div>
       )}
      </div>
      </div>
      </section>
      </Suspense>

      <Suspense  fallback = {<div>Loading Footer...</div>}>
      <Footer />
      </Suspense>
     
      </main>
      
      
    </div>

  )
  
  
}


