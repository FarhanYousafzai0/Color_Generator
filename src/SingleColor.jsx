import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";

import { BsCopy } from "react-icons/bs";
import { IoMdDoneAll } from "react-icons/io";

const SingleColor = ({rgb,hex,index}) => {

    const [copy,setCopy]=useState(false)
   useEffect(()=>{
    let timeout = setTimeout(() => {
        setCopy(false)
    }, 1000);
    return ()=>{
        clearTimeout(timeout)
    }
   });
    
  return (
    <>
      <div 
       style={{

        backgroundColor: `rgb(${rgb})`
       }}
      
      className="p-15 relative rounded-lg">

<p className={`text-2xl ${index >=10 && 'text-white' }`}>#{hex}</p>


{copy ? (
          <IoMdDoneAll
            className="absolute right-5 top-5 cursor-pointer "
            size={25}
          />
        ) : (
          <BsCopy
            onClick={() => {
              setCopy(true);
              navigator.clipboard.writeText(`#${hex}`);
              toast.success("Copied to clipboard");
              
            }}
            className="absolute right-5 top-5 cursor-pointer"
            size={25}
          />
        )}


      </div>
    </>
  )
}

export default SingleColor
