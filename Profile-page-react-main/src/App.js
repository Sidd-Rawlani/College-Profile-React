import './App.css';
import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Toggle from './components/toggle/Toggle';
import Navbar  from './components/Navbar/Navbar';
import Card  from './components/Card/Card';
import Tech from './components/Tech/Tech';
import Contact  from './components/Contact/Contact';
import Hand from './media/Hand.gif';
import Dp from './media/me2.jpg';
import Tilt from 'react-tilt';
import Education  from './components/Education/Education';
import About from './components/About/About';
import { BrowserRouter,Routes,Route,Link,Outlet } from 'react-router-dom';
import Home from './Home';
const particlesOpt={
        
    

  particles: {
      number:{
          value:100,
          density:{
              enable:true,
              value_area:2000
          }

      }
     
   }
  }
class App extends Component{

render(){
    return(

      <div className="App">
      <Particles 
      className="particles"
      params={particlesOpt}
      />

<BrowserRouter>
   
   <Routes>
     <Route path='/' element = {<Home />} />
     <Route path='/projects' element={<Card />} />
     <Route path='/education' element={<Education />} />
     <Route path='/contact' element={<Contact />} />
   </Routes>
 
 </BrowserRouter>
    
       

      
      


      </div>
    
    );



}

}

export default App;
