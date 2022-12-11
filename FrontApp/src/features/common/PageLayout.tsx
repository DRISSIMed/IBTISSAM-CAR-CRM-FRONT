import React from 'react'
import { Link } from 'react-router-dom';
import pic from '../../Imgaes/profile.png'
import {FiUser} from "react-icons/fi";
import {FiHome} from "react-icons/fi";
import {FiList} from "react-icons/fi";
import {FiRefreshCw} from "react-icons/fi";


import {AiOutlineCar} from "react-icons/ai";

import './PageLayout.css'

export default function PageLayout({children, }: { children: React.ReactNode | React.ReactNode[]; }) {

  return (
    <>
    <div className="Container__Common">
    <div className="Header__Common">
        <ul className='Nav__Barre'>
           <Link to='/account'>
                <div className='Container__Header__Options'>
                <FiUser size={25} />
                 <p>Account</p>
                </div>
           </Link> 
           <Link to='/cars'>
           <div className='Container__Header__Options'>
                <AiOutlineCar size={25} />
                 <p>Cars</p>
                </div>
           </Link> 
           <Link to='/appartement'>
           <div className='Container__Header__Options'>
                <FiHome size={25} />
                 <p>Appartements</p>
                </div>
           
           </Link>
           <Link to='/orders'>
                <div className='Container__Header__Options'>
                        <FiList size={25} />
                        <p>Orders</p>
                </div>
         
         </Link> 
         <Link to='/tour'>
                <div className='Container__Header__Options'>
                        <FiRefreshCw size={25} />
                        <p>Tours</p>
                </div>
         
         </Link> 
        </ul>
     

    </div>
    <div className="Title__Header">
            <Link to='/'><p className='Title__App'>IBTISSAM CAR </p></Link>
     </div>

           
     <div className="Own__Info__Header">
               <img src={pic } alt="" />
               <div className="Info__Owner__Common">
                <p>Hassan Ezahidi</p>
               </div>
       </div>

 
    </div>
    <>
            {children}
    </>

    <footer>
          <div className="Footer">IbtissamCar 2022 copyright © All rights reserved</div>
    </footer>
  
   </>
  )
}
