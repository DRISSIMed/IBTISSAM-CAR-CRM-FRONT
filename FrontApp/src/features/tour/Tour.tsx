import React from 'react'
import like from '../../Imgaes/like.png'
import noLike from '../../Imgaes/noLike.png'
import arrow  from '../../Imgaes/arrow.png'
import carIcon from '../../Imgaes/car.png'
import user from '../../Imgaes/user.png'
import zagora from '../../Imgaes/zagora-desert.png'
import agafay from  '../../Imgaes/agafay-desert.png'
import ourika from '../../Imgaes/ourika.png'
import todgha from '../../Imgaes/todgha.png'
import { useNavigate } from "react-router-dom";
import PageLayout from '../common/PageLayout'
import {toast } from 'react-toastify';
import './Tour.css'

export default function Tour() {
    const navigate = useNavigate();
   const handleLike =(id:string)=>{
     const element= document.getElementById(id) as HTMLInputElement
      if(element.src==='http://localhost:3000'+noLike ){
        toast.success("Thank you !",{className: 'toast-message'});
        element.src=like
       }else{
        element.src=noLike
       }
    
    console.log('Liked')
   }
   const  handleChoice =(id: string)=>{
          
        var element = document.getElementsByClassName('Tag__Element__App');
        for(var i=0;i<element.length;i++){
          if(element[i].id==id){
            
               element[i].classList.toggle('activeTag')
          }
          else{
               element[i].classList.remove('activeTag')
          }
        }
  
  
    }
   
  
  return (
    <PageLayout>
  <div style={{height:'100%',paddingTop:'70px',marginBottom:'30px'}}>
            
            <div className="Title__Home">
                        <h2>Car Rental in Morocco - Search & Save</h2>
                    </div>
                    <div className="Tags__App">
                        <div className="Tag__Element__App" id='0' onClick={()=>handleChoice("0")}>
                                <p>All</p>
                            </div>
                        <div className="Tag__Element__App" id='1'  onClick={()=>handleChoice("1")}>
                           
                            <p>Desert Zagoura</p>
                        </div>
                            
                        <div className="Tag__Element__App" id='2'  onClick={()=>handleChoice("2")}>
                        
                            <p>Desert Agafay</p>
                        </div>
                        <div className="Tag__Element__App" id='3'  onClick={()=>handleChoice("3")}>
                        
                            <p>Toudgha Valley</p>
                        </div>


                    
                    </div>
                    <div className="Body__Element__Container">

                            <div className="Body__Element">
                                <div className="Image">
                                    <img src={zagora} alt="" />
                                </div>
                                <div className="Description">
                                    <div className="Info__Car__Index">
                                        <p style={{color:'green',fontWeight:'bold',fontSize:'12px'}}>$120</p>
                                        <p style={{fontWeight:'bold'}}>Desert Zagoura</p>
                                    </div>
                                    <div className="Action">
                                        <div className='Action__Elment' >
                                            <img src={noLike} alt="" id='zagora' onClick={()=>handleLike('zagora')} />
                                        </div>
                                        <div className='Action__Elment'>
                                            <img src={arrow} alt="" onClick={()=> navigate('/detail-appartement')} />
                                        </div>
                                    </div>
                                </div>

                                <div className="Detail__House">
                                 <div className="Detail__Element__House">
                                    <img src={carIcon} />  
                                    <p>Toyota TX</p>
                                 </div>

                                 <div className="Detail__Element__House">
                                    <img src={user} />
                                    <p>4</p>
                                 </div>

                            </div>
                            
                            </div>

                            <div className="Body__Element">
                                <div className="Image">
                                    <img src={agafay} alt="" />
                                </div>
                                <div className="Description">
                                    <div className="Info__Car__Index">
                                        <p style={{color:'green',fontWeight:'bold',fontSize:'12px'}}>$120</p>
                                        <p style={{fontWeight:'bold'}}>Desert Agafay</p>
                                    </div>
                                    <div className="Action">
                                        <div className='Action__Elment'>
                                            <img src={like} alt="" />
                                        </div>
                                        <div className='Action__Elment'>
                                            <img src={arrow} alt="" onClick={()=> navigate('/detail-appartement')} />
                                        </div>
                                    </div>
                                </div>

                                <div className="Detail__House">
                                 <div className="Detail__Element__House">
                                    <img src={carIcon} />  
                                    <p>Toyota TX</p>
                                 </div>

                                 <div className="Detail__Element__House">
                                    <img src={user} />
                                    <p>4</p>
                                 </div>

                            </div>
                            
                            </div>

                            <div className="Body__Element">
                                <div className="Image">
                                    <img src={ourika} alt="" />
                                </div>
                                <div className="Description">
                                    <div className="Info__Car__Index">
                                        <p style={{color:'green',fontWeight:'bold',fontSize:'12px'}}>$120</p>
                                        <p style={{fontWeight:'bold'}}>Ourika valley</p>
                                    </div>
                                    <div className="Action">
                                        <div className='Action__Elment'>
                                            <img src={like} alt="" />
                                        </div>
                                        <div className='Action__Elment'>
                                            <img src={arrow} alt="" onClick={()=> navigate('/detail-appartement')} />
                                        </div>
                                    </div>
                                </div>

                                <div className="Detail__House">
                                 <div className="Detail__Element__House">
                                    <img src={carIcon} />  
                                    <p>Toyota TX</p>
                                 </div>

                                 <div className="Detail__Element__House">
                                    <img src={user} />
                                    <p>4</p>
                                 </div>

                            </div>
                            
                            </div>

                            <div className="Body__Element">
                                <div className="Image">
                                    <img src={todgha} alt="" />
                                </div>
                                <div className="Description">
                                    <div className="Info__Car__Index">
                                        <p style={{color:'green',fontWeight:'bold',fontSize:'12px'}}>$120</p>
                                        <p style={{fontWeight:'bold'}}>Toudgha valley</p>
                                    </div>
                                    <div className="Action">
                                        <div className='Action__Elment'>
                                            <img src={like} alt="" />
                                        </div>
                                        <div className='Action__Elment'>
                                            <img src={arrow} alt="" onClick={()=> navigate('/detail-appartement')} />
                                        </div>
                                    </div>
                                </div>

                                <div className="Detail__House">
                                 <div className="Detail__Element__House">
                                    <img src={carIcon} />  
                                    <p>Toyota TX</p>
                                 </div>

                                 <div className="Detail__Element__House">
                                    <img src={user} />
                                    <p>4</p>
                                 </div>

                            </div>
                            
                            </div>

                
                    </div>

        </div>
    </PageLayout>
  )
}
