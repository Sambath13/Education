import React, { useEffect, useState } from 'react'

const SimpleComponent = () => {

    const [count , setcount] = useState(1)  //render
       
    const[name , setname] = useState('gokul');

    useEffect(()=>{
        setname(name+"l")
        console.log('use effect')
    },[count])// one time  and  count ++

    // useEffect(()=>{
    //     setname(name+"l")
    // },[])  //one time 

   
  return (
    <div>
      <h1>{count}</h1>
      <p>{name}</p>
      {/* <button onClick={increment}>increment</button> */}
      <button onClick={()=>{
        setcount(count+1)
   }}>increment</button>
      {/* <button onClick={(Update)} > Increment</button> */}

      
    </div>
  )
}

export default SimpleComponent
