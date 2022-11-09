import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import './Toggle.css'
const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  console.log(isDarkMode);
  
      if(isDarkMode===false){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        
      }
      else{
        document.body.style.backgroundColor = "#2a2b2c";
        document.body.style.color = "white";
       
          
      }
  
  
  
  return (
    <div className="toggle-button">
         <DarkModeToggle
         
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={60}
    />
    </div>
   
  );
};
export default Toggle;