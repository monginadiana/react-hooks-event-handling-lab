// Code EyesOnMe Component Here
import React from "react";

export default function EyesOnMe(){
  // const diana =() => console.log('Good')
  // const blur =() => console.log("Hey! Eyes on me!")
  function focus() {
    console.log("Good!")
  }
  function blur() {
    console.log("Hey! Eyes on me!")
  }
 
  return(
    <button onFocus={focus} onBlur={blur}>"Eyes on me"</button>
  )
    
      }