import React, {suspense} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/Header.module.css'
import {FaCircle} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import {FaShoppingBag} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import {FaDiceTwo,FaListOl,FaListUl,FaHeart} from 'react-icons/fa'
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
import ScrollToTop from "react-scroll-to-top";


export default function Home() {
    
  return (
    <div className={''}>
      <Head>
        <title>Burger Den</title>
        <meta name="Burger Den" content="Burger Den" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>

      
      <section>

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
      <button className={styles.onlineOrder__btn}>ONLINE ORDER</button>
      <div className={styles.shopingIconContainer}><FaShoppingCart className={styles.shopingIcon}/>
      <div className={styles.shopingBadge}>0</div>
      </div>
      <button className={styles.secondMenu} ><FaDiceTwo className={styles.dice}/><FaListOl className={styles.listMenu} />{' '}<FaHeart className={styles.dice}/></button>
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
          <img src='beefburger.png' alt = 'beefburger' className={styles.bannerContents_R_img} loading = 'lazy' />
          </div>
          </div>
        </div>
       </div>
       </div>
       <div className={styles.liquidBg} ><img src ={'/liquidBg.png'} alt = 'abstract bg' loading = ''/></div>
        <div className={styles.bd1} ><img src ={'/liqBg.png'} alt = 'abstract bg' loading = 'lazy'/></div>
        <div className={styles.bd2} ><img src ={'/bd.png'} alt = 'abstract bg' loading = 'lazy'/></div>
      </div>
      </section>
      

     
      </main>
      
      
    </div>

  )
  
  
}


