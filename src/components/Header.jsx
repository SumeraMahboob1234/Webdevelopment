import React, { useState } from 'react'
import {  ShoppingCart } from "lucide-react";
import{Link} from 'react-router-dom';

    const Header = () => {
       const [menu,setmenu]=useState("Women")
         return (
             <div className='headerSection'>
            <div className="left">
            <div className="title">
                <h2>Shopping Mall</h2>

            </div>
         </div>
        <div className="center">
            <ul>
                <li onClick={()=>{setmenu("Women")}}><Link style={{textDecoration:'none'}} to='/'>Women</Link>{menu==="Women"}</li>
                <li onClick={()=>{setmenu("Men")}}><Link style={{textDecoration:'none'}}  to='/men'>Men</Link>{menu==="Men"}</li>
                <li onClick={()=>{setmenu("Children")}}><Link  style={{ textDecoration:'none'}} to='/children'>Children</Link>{menu==="Children"}</li>
                <li onClick={()=>{setmenu("Beauty")}}><Link style={{ textDecoration:'none'}}  to='/beauty'>Beauty</Link>{menu==="Beauty"}</li>
            </ul>
        </div>
        <div className="search">
    <input type ="text" placeholder='Search...'></input>
</div>
        <div className="right">
            <div> <Link style={{ textDecoration:'none'}}  to='/login' ><button> Login</button></Link ></div> 
            <div ><Link style={{ textDecoration:'none'}}  to='/cart'><button> <ShoppingCart size={18} color="Black"/> Cart </button></Link>
              
            </div>
        </div>
    </div>

  )
}
export default Header