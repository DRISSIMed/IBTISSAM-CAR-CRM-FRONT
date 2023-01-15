import React, { useEffect, useState } from 'react'
import { UrlApi } from './Util';
import Avatar from 'react-avatar'
import remove from '../../Imgaes/delete.png'
import star from '../../Imgaes/starOutline.png'
import fullStar from '../../Imgaes/starFullLine.png'
import noComment from '../../Imgaes/noComment.png'
import { BsCursorFill } from "react-icons/bs";
import {toast } from 'react-toastify';
import './Rate.css'

export default function Rate(itemId:any) {
  const [comment,setComment]=useState('')
  const [commentData,setCommentData]=useState<any>([])
  const handleCommentSubmit =(e: React.FormEvent<HTMLInputElement>)=>{
    setComment(e.currentTarget.value)
  }
  console.log("ITEM ID IN RETE ",itemId.itemId)
  useEffect(()=>{
    
    fetch(UrlApi+'comment/get/car/'+itemId.itemId, {
    })
    .then(response => response.json())
    .then(response => {
        console.log('RESPONSE ',response)   
                setCommentData(response)
    })
    .catch(function (error) {
      console.error(error)
    })
  },[itemId.itemId])

  const addComment=()=>{
    const Object={
      comment:comment,
      datePublsih:new Date(),
      rangeCar:{id:itemId.itemId}
    }
    fetch(UrlApi+'comment/create', {headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },method:'POST',body:JSON.stringify(Object)})
    .then(response =>   
      response.json())
    .then((response :any)=> {
      setComment('')
      setCommentData([response,...commentData])
      if(response){
        toast.success("Comment added !",{className: 'toast-message'});
      }
   
    })
    .catch(function (error) {
      console.error(error)
    })
  }

  const handleRemoveComment=(id :any)=>{
    console.log("ID ==>>",id)
    fetch(UrlApi+'comment/delete/'+id, {method:'POST'})

        .then(response =>  response.json())
        .then(response=>{
            setCommentData(response)
            if(response){
              toast.success("Comment removed !",{className: 'toast-message'});
            }
         
        
        })
        .catch(function (error) {
          console.error(error)
        })


  }
  const addStar =(id :any)=>{
    console.log("ID ==>>",id)

    const element=document.getElementById(id) as HTMLInputElement
    if( element.src==='http://localhost:3000'+star){
      element.src=fullStar

    }
    else{
      element.src=star
    } 

  }
  return (
    <div className='Container__Rate'>

       <div className="Element__Container__Rate">
         <Avatar value='MD' round={true}  size='30px' style={{marginLeft:'10px'}}/>
         <div className="Input__Comment">
         <div className="Starts__Container">
          <div>
          {[...Array(5)].map((e, index) => {
            return(
             
                  <img src={star} id={index.toString()} onClick={()=>addStar(index.toString())} />
            
            )
          
            })} 
          </div>
       
            </div>

            <div className="Submit__Comment">
            <input type="text"  value={comment} onChange={(e: React.FormEvent<HTMLInputElement>)=>handleCommentSubmit(e)} placeholder='add your comment ...'/>
            <BsCursorFill style={{cursor:'pointer',marginTop:'10px'}} size="25px" onClick={addComment}/>
            </div>
          
         </div>

    

       </div>
       
        {commentData && commentData.length>0 ?
        

        commentData.map(function(e:{
          id:any 
          comment:String
          datePublsih:any

         }):any{
            return(
              <div className="Element__Container__Rate" key={e.id}>
              <Avatar value='MD' round={true}  size='30px' style={{marginLeft:'10px'}}/>
              <div className="Input__Comment">
              <div className="Starts__Container">
              {[...Array(5)].map((e, index) => {
                 return(
                  
                       <img src={star} alt="" />
                 
                 )
               
                 })}
                 </div>
                 <div className="Comment_Container">
                    <div className="Comment__Text">
                       <h6>{e.datePublsih?e.datePublsih.toString().slice(0,10):''}</h6>
                       <p>{e.comment}</p>
                    </div>
                    <div className="Remove__Container">
                       <img src={remove}  onClick={()=>handleRemoveComment(e.id)}/>
                    </div>
                   

                 </div>
               
              </div>
      
         
      
            </div>

            )

         })
        
      
        
        
        :  <div className="No__Comment">
            <img src={noComment} />
            <h3>No comment be the first </h3>
          </div>}
    


    </div>
  )
}
