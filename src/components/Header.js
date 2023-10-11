import React, { useState,useEffect } from "react";
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
function Header() {
  const [dark,setDark]=useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = dark===true ? '#202124' : 'white'; 
  }, [dark]);
  return (
    <header>
      <h1>Keeper</h1>
      {
        dark===false?( <MdOutlineDarkMode className="icons" onClick={()=>setDark(!dark)}/>):(<MdOutlineLightMode className="icons" onClick={()=>setDark(!dark)}/>)
      }
     
      
    </header>
  );
}

export default Header;
