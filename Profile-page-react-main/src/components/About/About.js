import './About.css';
import Hand from '../../media/Hand.gif';
import Dp from '../../media/me_png.png';
const About = ()=>{
    return(
        <div className="about">
            
            <img src={Dp} className="profile" alt="me" ></img>
            {/* height="600" width="300" style = {{margin:"40px"}} */}
            <p className="me-top"><b>About</b></p>
            <p className='me'><span className="wave/">
        <p>Hii <img src= {Hand} alt = "hand" width="35px" />  I'm Hrishi.</p> 
        
     
         
          
          
        </span></p>
            <p className="me">
         
            I'm a Software Developer <br/> <br/>
            👉 I'm in the third year pursuing Bachelors of Engineering in Information Technology.<br/>  
            🔭 I'm skilled and proficient in Web Development and technologies like React JS, <br/>
           Node JS, Express JS,Javascript, Java, Python, C, C++.<br/>
            🤔 Learning Android Development, ML and AI, Kubernetes, Docker.<br/>

       
            </p>
            {/* <div className="quote">
            TALK IS CHEAP, <br /> 
            SHOW ME THE CODE.
        </div> */}
        </div>
    );


}
export default About;