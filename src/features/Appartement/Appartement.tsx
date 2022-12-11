import React from 'react'
import audi from '../../Imgaes/audi.png'
import like from '../../Imgaes/like.png'
import house from '../../Imgaes/house.png'
import arrow  from '../../Imgaes/arrow.png'
import location from '../../Imgaes/location.png'
import user from '../../Imgaes/user.png'
import { useNavigate } from "react-router-dom";
import PageLayout from '../common/PageLayout'
import './Appartement.css'

export default function Appartement() {
    const navigate = useNavigate();
  return (
    <PageLayout>
        <div style={{height:'100%',paddingTop:'70px',marginBottom:'30px'}}>
            
            <div className="Title__Home">
                        <h2>Car Rental in Morocco - Search & Save</h2>
                    </div>
                    <div className="Tags__App">
                        <div className="Tag__Element__App">
                                <p>All</p>
                            </div>
                        <div className="Tag__Element__App">
                           
                            <p>Villa</p>
                        </div>
                            
                        <div className="Tag__Element__App">
                        
                            <p>Appartement</p>
                        </div>

                    
                    </div>
                    <div className="Body__Element__Container">

                            <div className="Body__Element">
                                <div className="Image">
                                    <img src={house} alt="" />
                                </div>
                                <div className="Description">
                                    <div className="Info__Car__Index">
                                        <p style={{color:'green',fontWeight:'bold',fontSize:'12px'}}>$120</p>
                                        <p style={{fontWeight:'bold'}}>Villa</p>
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
                                    <img src={location} />  
                                    <p>Marrakech</p>
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
