import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from 'react';
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
  
       typeof window !== 'undefined' ? window.addEventListener('scroll', toggleVisible) : ' '

      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
   

  return (
    <main >
      <div className={styles.footer}>

        <div className={styles.footer_logo}>
          <div className={styles.footer_logo1}><hr className={styles.footer_hrM} /></div>
          <div className={styles.footer_logo2}><img src = {'/cheflogo.png'} alt = 'logo' className={styles.footer_logoImg}/><span className={styles.footer_CompName}>Burger Den</span></div>
          <div className={styles.footer_logo3}><hr  className={styles.footer_hrM}/></div>
        </div>
        <div className={styles.footer_addressContacts}>
          <div className={styles.footer_addressContacts1}>
            <div className={styles.footer_addressContacts2_hdr}>Address</div>
            <div className={styles.footer_addressContacts2_2}>570 8th Ave, <br /> New York, NY 10018 <br /> United States</div>
            <div></div>
          </div>
          <div className={styles.footer_addressContacts2}>
          <div className={styles.footer_addressContacts2_hdr}>Book a table</div>
            <div className={styles.footer_addressContacts2_2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div className={styles.footer_addressContacts2_tel}>+880 786 4532 990</div>
          </div>
          <div className={styles.footer_addressContacts3}>
          <div className={styles.footer_addressContacts2_hdr}>Opening hours</div>
            <div className={styles.footer_addressContacts2_2}>Monday-Friday</div>
            <div  className={styles.footer_addressContacts2_2}>10.00 AM - 11.00 PM</div>
          </div>
        </div>
       <div className={styles.footer_hr}><hr className={styles.footer_hrM} /></div>
       <div className={styles.footer_links}>
        <div className={styles.footer_links_contianer}>
          <ul>
            <li><Link href = '/#' scroll = {false}><a>About</a></Link></li>
            <li><Link href = '/#' scroll = {false}><a>Menu</a></Link></li>
            <li><Link href = '/#' scroll = {false}><a>Blog</a></Link></li>
            <li><Link href = '/#' scroll = {false}><a>Gallery</a></Link></li>
            <li><Link href = '/#' scroll = {false}><a>Faq</a></Link></li>
            <li><Link href = '/#' scroll = {false}><a>Contact</a></Link></li>
          </ul>
        </div>
        <div className={styles.footer_Social}>
        <ul className={styles.footer_ul}>
            <li><Link href = '/#' scroll = {false}><a><FaFacebook /></a></Link></li>
            <li><Link href = '/#' scroll = {false}><a><FaTwitter /></a></Link></li>
            <li><Link href = '/#' scroll = {false}><a><FaTiktok /></a></Link></li>
            <li><Link href = '/#' scroll = {false}><a><FaYoutube /></a></Link></li>
          </ul>
        </div>
       <button className={styles.upButton} onClick = {scrollToTop} style={{display: visible ? 'inline' : 'none'}}><FaArrowUp /></button>

       </div>
       <div className={styles.copyRight}><FaCopyright /> {dateBuilder(new Date())}  Burger Den All rights reserved</div>
      </div>
      

      <section>
        
      </section>
    </main>
  )
}
