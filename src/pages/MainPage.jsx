import React,{ useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Gents,Ladies,Kids,BeautyData} from '../pages/data'

import WomanCollection from '../components/WomanCollection'
import KidsCollection from '../components/KidsCollections'
import BeautyComponent from '../components/BeautyComponent'
import { Heart, Search, ShoppingCart } from "lucide-react";


const MainPage = () => {
  const[gentsFashion, setGentsFashion]= useState (Gents)
  const[ladiesFashion,setLadiesFashion]= useState(Ladies)
  const[kidsFashion,setKidsFashion]= useState(Kids)
  const[beauty,setBeauty]= useState(BeautyData)
  
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion= {gentsFashion} />
        <WomanCollection ladiesFashion= {ladiesFashion} />
        <KidsCollection kidsFashion= {kidsFashion}/>
        <BeautyComponent beauty= {beauty}/>
        <Footer/>
        
    </div>
  )
}

export default MainPage