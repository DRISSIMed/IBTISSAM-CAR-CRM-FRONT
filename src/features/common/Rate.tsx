import React, { useState } from 'react'
import Avatar from 'react-avatar';
import star from '../../Imgaes/starOutline.png'
import { BsCursorFill } from "react-icons/bs";
import './Rate.css'

export default function Rate() {
  const [comment,setComment]=useState('')
  const [commentData,setCommentData]=useState<string[]>([])
  const handleCommentSubmit =(e: React.FormEvent<HTMLInputElement>)=>{
    setComment(e.currentTarget.value)
    //setCommentData(prv=>[...prv,comment])
    console.log(e.currentTarget.value)

  }
  const addComment=()=>{
    setCommentData(prv=>[...prv,comment])
  }
  return (
    <div className='Container__Rate'>

       <div className="Element__Container__Rate">
         <Avatar value='MD' round={true}  size='30px' style={{marginLeft:'10px'}}/>
         <div className="Input__Comment">
         <div className="Starts__Container">
         {[...Array(5)].map((e, index) => {
            return(
             
                  <img src={star} alt="" />
            
            )
          
            })}
            </div>
            <div className="Submit__Comment">
            <input type="text" onChange={(e: React.FormEvent<HTMLInputElement>)=>handleCommentSubmit(e)} placeholder='add your comment ...'/>
            <BsCursorFill style={{cursor:'pointer',marginTop:'10px'}} size="25px" onClick={addComment}/>
            </div>
          
         </div>

    

       </div>
       
        {commentData && commentData.length>0 ?
        
        <div className="Element__Container__Rate">
        <Avatar value='MD' round={true}  size='30px' style={{marginLeft:'10px'}}/>
        <div className="Input__Comment">
        <div className="Starts__Container">
        {[...Array(5)].map((e, index) => {
           return(
            
                 <img src={star} alt="" />
           
           )
         
           })}
           </div>
           <div className="Submit__Comment">
              <p>{comment}</p>
           </div>
         
        </div>

   

      </div>
        
        
        : 'No Comment be the first'}
    


    </div>
  )
}
