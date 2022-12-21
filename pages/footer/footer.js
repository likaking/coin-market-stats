import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import React, {useEffect, useState} from 'react';
import styles from '/styles/Footer.module.css'
import {FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaCopyright, FaArrowUp} from 'react-icons/fa'






export default function Footer() {
  
    const dateBuilder = (d)=>{
        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let days = ["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"]
      
      
      let today = days[d.getDay()];
      let c_day = d.getDate();
      let currMounth = months[d.getMonth()];
      let year = d.getFullYear();
      
      return ` ${year} `
      
      }

      const [visible, setVisible] = useState(false);
  
        const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        scrolled > 300 ? setVisible(true) : setVisible(false)
        }
  
     // const addScroll = ()=> {typeof window !== 'undefined' ? window.addEventListener('scroll',toggleVisible ) : ''}

      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          left: 0,
          behavior: 'smooth',
        
         
        });

      };
      

      useEffect(()=>{
        //addScroll()
        window.scrollTo({
          top: 0, 
          left: 0,
          behavior: 'smooth',
        })
        window.addEventListener('scroll',toggleVisible ) 
        toggleVisible();
       // return ()=> window.removeEventListener('scroll',toggleVisible)
      },[])
   

  return (
    
      <div className={styles.footer}>

        <div className={styles.footer_logo}>
          <div className={styles.footer_logo1}></div>
          <div className={styles.footer_logo2}>
          <span className={styles.footer_CompName}>Coin Market Stats</span></div>
          <div className={styles.footer_logo3}></div>
        </div>
        <div className={styles.footer_addressContacts}>
          
        </div>
       <div className={styles.footer_hr}></div>
       <div className={styles.footer_links}>
        <div className={styles.footer_links_contianer}>
          <ul>
            <Link href = '' scroll = {false}><li className={styles.li}> About </li></Link>
            <Link href = '' scroll = {false}><li className={styles.li} >Menu </li></Link>
            <Link href = '' scroll = {false}><li className={styles.li} >Blog </li></Link>
            <Link href = '' scroll = {false}><li className={styles.li} >Gallery </li></Link>
            <Link href = '' scroll = {false}><li className={styles.li} >Faq </li></Link>
            <Link href = '' scroll = {false}><li className={styles.li}>Contact </li></Link>
          </ul>
        </div>
        <div className={styles.footer_Social}>
        <ul className={styles.footer_ul}>
            <li className={styles.li}> <FaFacebook /> </li>
            <li className={styles.li}> <FaTwitter /> </li>
            <li className={styles.li}> <FaTiktok /> </li>
            <li className={styles.li}> <FaYoutube /> </li>  
          </ul>
        </div>
       <button className={styles.upButton} onClick = {scrollToTop} style={{display: visible ? 'inline' : 'none'}}><FaArrowUp /></button>
       
       </div>
       <div className={styles.copyRight}><FaCopyright /> {dateBuilder(new Date())} Coin Market Stats</div>
      </div>
      

     
   
  )
}
