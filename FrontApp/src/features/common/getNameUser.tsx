import React from 'react'

export default function getNameUser(Firstname:String,Lastname:String) {
    const FirstLetter=Firstname.slice(0,1);
    const LastLetter=Lastname.slice(0,1)
    const concat=FirstLetter+LastLetter
  return concat
}
