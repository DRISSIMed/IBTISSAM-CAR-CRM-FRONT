import React, { useState,CSSProperties, useEffect } from 'react'
import { UrlApi,getPublicImagePath } from '../common/Util'
import { useNavigate } from "react-router-dom";
import PageLayout from '../common/PageLayout'
import './Appartement.css'
import RiseLoader from "react-spinners/RiseLoader";
import {toast } from 'react-toastify';
import { red } from '@mui/material/colors'
const override: CSSProperties = {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    textAlign:'center'

  };

export default function Appartement() {
    const navigate = useNavigate();
    const [dataList,setDataList]=useState([])
    const [Loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(UrlApi+'appartement/v2/list', {
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataList(json)
        })
        .catch(function (error) {
          console.error(error)
        })
    },[])

    const handleLike =(id:string)=>{
   
        const element= document.getElementById(id) as HTMLInputElement
        console.log("ELEMENT",element)
         if(element.src==='http://localhost:3000'+getPublicImagePath('noLike.png') ){
           toast.success("Thank you !",{className: 'toast-message'});
           element.src=getPublicImagePath('like.png')
          }else{
           element.src=getPublicImagePath('noLike.png')
          }
       
       console.log('Liked')
      }
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
                    {
                        dataList && dataList.length>0 ?
                       
                          dataList.map(function(e:{
                            id:any 
                            libelle:any
                            price:any
                            picture:any
                            type:any
                            nbrOfperson:any
                            localisation:any
                           }):any{
                            return (
                                <div className="Body__Element" key={e.id}>
                                <div className="Image">
                                    <img src={'./Appartements/'+e.picture+'.png'} />
                                </div>
                                <div className="Description">
                                    <div className="Info__Car__Index">
                                        <p style={{color:'green',fontWeight:'bold',fontSize:'12px'}}>${e.price}</p>
                                        <p style={{fontWeight:'bold'}}>
                                           {e.type}
                                        </p>
                                    </div>
                                    <div className="Action">
                                        <div className='Action__Elment'>
                                            <img src={getPublicImagePath('noLike.png')} id={e.localisation} onClick={()=>handleLike(e.localisation)} />
                                        </div>
                                        <div className='Action__Elment'>
                                            <img src={getPublicImagePath('arrow.png')} alt="" onClick={()=> navigate('/detail-appartement/'+e.id)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="Detail__Car">
                                     <div className="Detail__Element">
                                        <img src={getPublicImagePath('location.png')} />  
                                        <p>Marrakech /{e.localisation}</p>
                                     </div>
    
                                     <div className="Detail__Element">
                                        <img src={getPublicImagePath('user.png')} />
                                        <p>{e.nbrOfperson}</p>
                                     </div>
    
                                </div>
                            </div>
                            )
                          })
                          
                        :
                        <RiseLoader
                        color='#36d7b7'
                        loading={Loading}
                        cssOverride={override}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    }
              

        </div>
    </PageLayout>
  )
}
