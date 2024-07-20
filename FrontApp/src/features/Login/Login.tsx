import React from 'react'
import './Login.css'
import { AiOutlineUser} from "react-icons/ai";
import { AiOutlineUnlock} from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";
import pic from '../Imgaes/google.png'
import { Link } from 'react-router-dom';



export default function Login() {
  return (
         
            <div className='Login__Container'>
                   <h2>Login in to see more</h2>
                <div className="View__Input__Login">
                
                    <div className="Input__Icon__Login">
                    <AiOutlineUser size={30} color='gray' style={{marginLeft:"5px"}}/>
                    <input type="text"  placeholder='Login' />
                    </div>
                   
                </div>

                <div className="View__Input__Login">
                   
                    <div className="Input__Icon__Login">
                    <AiOutlineUnlock size={30} color='gray' style={{marginLeft:"5px"}}/> 
                    <input type="password" placeholder='Password' />
                    </div>
                </div>

                <div className="Submit__Button">
                    <div className="Option__Login">
                    <Link to='/Home'>
                    <button >Login in</button>
                    </Link>
                    </div>
                
                    <div className="Option__Login">
                    <Link to='/home'>
                    <button >Login as guest</button>
                    </Link>
                    </div>
                   
                </div>

                <div style={{alignSelf:'center'}}>
                    <h3 style={{color:'gray'}}>OR</h3>
                </div>

                <div className="Social__Media">
                    <div className="Facebbok__View">
                        <AiFillFacebook color='#0165E1' size={30}/>
                       <div className="Title__Media">
                           <h5>Continue with facebbok</h5>
                        </div> 
                    </div>

                    <div className="Facebbok__View">
                     <img alt='tt' style={{height:25,width:25}} src={pic}/>
                        <div className="Title__Media">
                           <h5>Continue with google</h5>
                        </div> 
                    </div>
                
                </div>


            </div>
  
  
        
  )
}
