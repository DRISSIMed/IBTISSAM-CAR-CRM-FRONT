import React, { useEffect } from 'react'
import Rate from '../common/Rate'
import PageLayout from '../common/PageLayout'
import getNameUser from '../common/getNameUser'

export default function Cars() {
  useEffect(()=>{
   
    console.log( getNameUser('Mohamed','Drissi'))
  },[])
  return (
    <PageLayout>
      <div style={{paddingTop:'100px',height:'100%',width:'100%'}}>
      <Rate />
      </div>
  
    </PageLayout>
  )
}
