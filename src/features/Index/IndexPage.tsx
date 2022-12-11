import React,{useEffect,useState,CSSProperties} from 'react'
import './IndexPage.css'
import noLike from '../../Imgaes/noLike.png'
import user from '../../Imgaes/user.png'
import fuel from '../../Imgaes/fuel.png'
import location from '../../Imgaes/location.png'
import speed from '../../Imgaes/speed.png'
import like from '../../Imgaes/like.png'
import unlike from '../../Imgaes/noLike.png'
import arrow  from '../../Imgaes/arrow.png'
import audi from '../../Imgaes/audi.png'
import mercedesIcon from '../../Imgaes/mercedes.png'
import volswagnIcon from '../../Imgaes/volswagn.png'
import renaultIcon from '../../Imgaes/renault.png'
import audiIcon from '../../Imgaes/audi-logo.png'
import landIcon from'../../Imgaes/land.png'
import hyundiaIcon from  '../../Imgaes/hyundai.png'
import jeepIcon from  '../../Imgaes/jeep.png'
import bmwIcon from '../../Imgaes/bmw.png'
import { AiOutlineUser} from "react-icons/ai";
import { AiOutlineUnlock} from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Login from '../Login/Login';
import PageLayout from '../common/PageLayout'
import {toast } from 'react-toastify';
import RiseLoader from "react-spinners/RiseLoader";
import { red } from '@mui/material/colors'
const override: CSSProperties = {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    textAlign:'center'

  };

export default function Index() {
    const navigate = useNavigate();
    const [dataList,setDataList]=useState([])
    const [dataListGlobal,setDataListGlobal]=useState([])
    const [tagCarList,setTgaCarList]=useState([])
    const [Loading,setLoading]=useState(true)
    const [initialTag,setInitialTag]=useState('ALL')
  const handleSubmit =()=>{

  }
  useEffect(()=>{
    fetch('http://localhost:8090/IbtissamCar/range-car/v2/list', {
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataList(json)
            setDataListGlobal(json)
        })
        .catch(function (error) {
          console.error(error)
        })

        fetch('http://localhost:8090/IbtissamCar/type-car/v2/list', {
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setTgaCarList(json)
        })
        .catch(function (error) {
          console.error(error)
        })
  
},[])

const  handleChoice =(id: string,code:string)=>{
    console.log("CODE TO FILTER",code)
    var element = document.getElementsByClassName('Tag__Element');
    for(var i=0;i<element.length;i++){
      if(element[i].id==id){
        
           element[i].classList.toggle('activeTag')
      }
      else{
           element[i].classList.remove('activeTag')
      }
    }
    if(code=="ALL"){
        setDataList(dataListGlobal)
    }
    else {
        const dataFiltred=dataListGlobal.filter(function(obj:{code:string}):any{return(obj.code==code)})
        setDataList(dataFiltred)
        console.log('dataFiltred',dataFiltred)
    }
 

}
const handleLike =(id:string)=>{
   
    const element= document.getElementById(id) as HTMLInputElement
    console.log("ELEMENT",element)
     if(element.src==='http://localhost:3000'+noLike ){
       toast.success("Thank you !",{className: 'toast-message'});
       element.src=like
      }else{
       element.src=noLike
      }
   
   console.log('Liked')
  }

  


  return (
  
    <PageLayout>
    <div className="Page">
        
                
        <div className="Container">
                <div className="Title__Home">
                    <h2>Car Rental in Morocco - Search & Save</h2>
                </div>
              

                <div className="Tags__Car">
                 {
                    tagCarList && tagCarList.length>0? 
                    tagCarList.map(function(e:{
                        id:any 
                        libelle:any
                        code:any
    
                       }):any{
                        return(
                            <div className="Tag__Element" key={e.id} id={e.id} onClick={()=>handleChoice(e.id,e.code)}>
                            <p className='Logo__Icon'><img src={mercedesIcon}/></p>
                            <p>{e.libelle}</p>
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
                <div className="Body__Element__Container">

                    {
                        dataList && dataList.length>0 ?
                       
                          dataList.map(function(e:{
                            id:any 
                            libelle:any
                            price:any
                            picture:any
                            code:any
                      
                           }):any{
                            return (
                                <div className="Body__Element" key={e.id}>
                                <div className="Image">
                                    <img src={'./Cars/'+e.picture+'.png'} />
                                </div>
                                <div className="Description">
                                    <div className="Info__Car__Index">
                                        <p style={{color:'green',fontWeight:'bold',fontSize:'12px'}}>${e.price}</p>
                                        <p style={{fontWeight:'bold'}}>
                                           {e.libelle}
                                        </p>
                                    </div>
                                    <div className="Action">
                                        <div className='Action__Elment'>
                                            <img src={noLike} id={e.libelle} onClick={()=>handleLike(e.libelle)} />
                                        </div>
                                        <div className='Action__Elment'>
                                            <img src={arrow} alt="" onClick={()=> navigate('/details-car/'+e.id)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="Detail__Car">
                                     <div className="Detail__Element">
                                        <img src={location} />  
                                        <p>Marrakech</p>
                                     </div>
    
                                     <div className="Detail__Element">
                                        <img src={speed} />
                                        <p>239 km</p>
                                     </div>
    
                                     <div className="Detail__Element">
                                        <img src={fuel} />
                                        <p>Hybrid</p>
                                     </div>
    
                                     <div className="Detail__Element">
                                        <img src={user} />
                                        <p>4</p>
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
          
              
            



        </div>
       
        <div className="Left__Container_Index">
              <div className="LoginComp">
              <Login/>
              </div>
            

            

        </div>
  

    </div>
    <div className="Body__Container">

      

    </div>
    </PageLayout>
  
  )
    
}
