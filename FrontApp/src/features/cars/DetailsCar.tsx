import React  , { useState,useEffect } from 'react'
import audi from '../../Imgaes/audi.png'
import house from '../../Imgaes/house.png'
import fuel from '../../Imgaes/fuel.png'
import location from '../../Imgaes/location.png'
import speed from '../../Imgaes/speed.png'
import user  from '../../Imgaes/man.png'
import calendar from '../../Imgaes/calendar.png'
import ageIcon from '../../Imgaes/adultAge.png'
import emailIcon from '../../Imgaes/mail.png'
import phoneIcon from '../../Imgaes/telephone.png'
import identityIcon from '../../Imgaes/card.png'
import drivingIcon from '../../Imgaes/driving.png'
import contratIcon from '../../Imgaes/contract.png'
import { useFormik } from 'formik';
import { useParams } from "react-router-dom";
import './DetailsCar.css'
import PageLayout from '../common/PageLayout'
import Rate from '../common/Rate'



export default function DetailsCar() {
    const [email,setEmail]=useState('');
    const [password,setPassord]=useState('')
    const [dataList,setDataList]=useState(Object)

    let {id}=useParams();
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  
   
      useEffect(()=>{
        fetch('http://localhost:8090/IbtissamCar/range-car/get/'+id, {
            })
            .then(response => response.json())
            .then(response => {
                console.log('RESPONSE ',response)   
                        let data=response
                 setDataList(data)
                // setTimeout(()=>console.log("inisde state", setDataList(json)  ),1000)
                setTimeout(()=>console.log("inisde state", dataList  ),1000)
                setTimeout(()=>console.log("lentgh", dataList.id  ),1000)
            })
            .catch(function (error) {
              console.error(error)
            })
        }
      ,[dataList])



  return (
         <PageLayout>   
         <div style={{height:'100%',paddingTop:'100px'}}>
            {   
               dataList?
               
                       
                            <div className='Container__Detail' key={dataList.id}>

                            <div className="Left__Side">
                                    
                                    <div className="Title__Left__Side">
                        
                                            <h1> {dataList.libelle}</h1>
                                    
                                        
                                    </div>
    
                                    <div className="Global__Image">
                                        <img src={'../Cars/'+dataList.picture+'.png'} />
                                    </div>
                                    
                                    <div className="Secondaire__Images">
    
                                                <div className="Secondaire__Image">
                                                    <img src={'../Cars/'+dataList.picture+'.png'} />
                                                </div>
                                                
                                                <div className="Secondaire__Image">
                                                    <img src={'../Cars/'+dataList.picture+'.png'}  />
                                                </div>
    
                                                <div className="Secondaire__Image">
                                                    <img src={'../Cars/'+dataList.picture+'.png'} alt="" />
                                                </div>
    
                                    </div>
    
                                    <div className="Colors__Car__Container">
                                        
                                        <div className="Color__Car" id='id1' ></div>
                                        <div className="Color__Car" id='id2'></div>
                                        <div className="Color__Car" id='id3'></div>
                                        <div className="Color__Car" id='id4'></div>
                                    </div>
                            </div>
    
                            <div className="Right__Side">
    
                                            <div className="Container__Right">
    
                                                    <div className="Image__Right">
                                                        <img src={'../Cars/'+dataList.picture+'.png'} alt="" />
                                                    </div>
    
                                                    <div className="Price__Car__Detail">
                                                        <h3>{dataList.price} $/Day</h3>
                                                    </div>
    
                                                    <div className="Container__Detail__Car">
    
                                                    <div className="Info__Car">
                                                            <div className="Info__Car__Description">
                                                                    <img src={location} /> 
                                                            </div>
                                                            <div className="Info__Car__Description">
                                                            <div className="Text__Description"><p>Marrakech</p></div>
    
                                                                
                                                            </div>     
                                                    </div>
                                                    
                                                    <div className="Info__Car">
                                                            <div className="Info__Car__Description">
                                                                    <img src={speed} />
                                                            </div>
                                                            <div className="Info__Car__Description">
                                                                    <div className="Text__Description">
                                                                                <p>239 km</p>
                                                                    </div>
                                                                    
                                                            </div> 
                                                    </div>
    
                                                    
                                                    <div className="Info__Car">
                                                            <div className="Info__Car__Description">
                                                                <img src={fuel} />
                                                            </div>
                                                            <div className="Info__Car__Description">
                                                                <div className="Text__Description">
                                                                        <p>Hybrid</p>
                                                                </div>
                                                            
                                                            </div>
                                                            
                                                    
                                                    </div>
    
                                                    <div className="Info__Car">
                                                            <div className="Info__Car__Description">
                                                                <img src={user} />
                                                            </div>
                                                            <div className="Info__Car__Description">
                                                            <div className="Text__Description"> <p>4</p></div>
    
                                                            
                                                            </div>
                                                    
                                                    
                                                    </div>
    
                                                    <div className="Info__Car">
                                                            <div className="Info__Car__Description">
                                                                <img src={calendar} />
                                                                <div className="Button__Counter">
                                                                    <button>+</button>
                                                                    <button>-</button>
                                                                </div>
                                                            </div>
                                                            <div className="Info__Car__Description">
                                                            <div className="Text__Description"> <p>0 Day</p></div>
    
                                                            
                                                            </div>
                                                    
                                                    
                                                    </div>
    
                                                    
    
    
                                        </div>
                                        <a href="#form"><button style={{alignSelf:'center'}} >Reserve it now</button></a> 
    
                                    </div>
    
                            </div>
                            </div>
                        
               
                :
                'not'
            }
                    
             

               <div className="Form__Reservation">
                             <div className="Form__Title">
                                    <h1>Take your car now !</h1>
                                </div>
                            <form onSubmit={formik.handleSubmit} id="form">
                            <div className="Title__Information">
                                <h3>Information about you</h3>
                                <p>Enter the fields below to reserve your car</p>
                            </div>
            
                             
                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={user} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                    />
                                   </div>

                             </div>
                        
                      
                        
                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={emailIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                    />
                                   </div>

                             </div>

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={phoneIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                    />
                                   </div>

                             </div>

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={ageIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                    />
                                   </div>

                             </div>

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={user} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                    />
                                   </div>

                             </div>

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={identityIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                    />
                                   </div>

                             </div>


                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={drivingIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                    />
                                   </div>

                             </div>

                             <div className="Input__View_Detail">
                                   <div className="Input__Icon__Detail">
                                       <img src={identityIcon} alt="" />

                                   </div>
                                   <div className="Input__Pad">
                                        <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                    />
                                   </div>

                             </div>
                        
                            <button type="submit">Submit</button>
                            </form>

               </div>

               <Rate/>

         </div>
         </PageLayout>
     )
}
