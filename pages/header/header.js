import styles from '/styles/Header.module.css'
import {FaList} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import {FaBattleNet} from 'react-icons/fa'
import { useState,useEffect } from 'react';
import Link from 'next/link'




function Navbar(){
  const [toggle, setToggle] = useState(false)

  const toggleMenu = ()=> {
    !toggle ? setToggle(true) : setToggle(false);
  }


return(
<>
<div className={styles.nav_bar}>
<div className={styles.nav_bar__logo}>
<Link href = '/#'><a ><img src = {'/logo.png'} alt = 'logo' loading = "" className={styles.nav_bar__logo_icon} /></a></Link>
</div>

<div className={styles.nav_bar__compName}>
Coin Market Stats
</div>
<div className={styles.nav_bar__wraper}>
<ul className={styles.nav_bar__menu}>
<li><a href = "#" className={styles.nav_bar__menu_a}>Explore</a></li>
<li><a href = "#" className={styles.nav_bar__menu_a}>Creator</a></li>
<li><a href = "#" className={styles.nav_bar__menu_a}>Market</a></li>
<li><a href = "#" className={styles.nav_bar__menu_a}>Community</a></li>
</ul>
</div>


<div className={styles.nav_bar__mobileBtn} onClick={toggleMenu}><FaBars /></div>
<div className={styles.nav_Mobilemenu} style={{display : toggle ? 'block' : 'none'}}>
  <ul>
  <li><a href = "#" className={styles.nav_bar__menu_aMobile}>Explore</a></li>
<li><a href = "#" className={styles.nav_bar__menu_aMobile}>Creator</a></li>
<li><a href = "#" className={styles.nav_bar__menu_aMobile}>Market</a></li>
<li><a href = "#" className={styles.nav_bar__menu_aMobile}>Community</a></li>
  </ul>
  <div ><FaBattleNet className={styles.nav_Mobilemenu_battleNet} /></div>
  </div>

 </div>
</>
)}

export default Navbar;