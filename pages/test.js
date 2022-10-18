import React, {Suspense} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaBars} from 'react-icons/fa'
import {FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaCopyright, FaArrowUp, FaArrowRight, FaUserFriends,FaShoppingBasket,FaHamburger} from 'react-icons/fa'
import { useState,useEffect,useRef } from 'react';
import Speech from 'speak-tts'
import axios from 'axios'
import converter from 'number-to-words'
import { ToWords } from 'to-words';
import Header from './header/header.js';

const Footer = React.lazy(()=> import('./footer/footer.js'))

export default function Home() {
return(

    <Footer />
)
}