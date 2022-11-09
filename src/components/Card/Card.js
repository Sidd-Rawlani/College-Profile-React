import Tom from '../../media/Tom.png';
import Robot from '../../media/robots.png';
import ML from '../../media/ML.png';
import './Card.css';
import GH from '../../media/github.png';
import Tilt from 'react-tilt'
import Sign from '../../media/sign language.jpg'
import msg from '../../media/messaging.jpg'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Card = () =>{

    const project_items = [
        {
            project_name:'Sign Language Interpreter',
            project_desc:`<p>Two important features <br />
            1) Sign language to text/speech <br />
            2) Text to corresponding signs.<br />
            </p>` ,
            project_link:'https://github.com/Hrishikesh156/Sign-Language-Interpreter',
            project_img:Sign

        },
        {
            project_name:'Messaging Application.',
            project_desc:` <p>one to one texting, community channel, stories, reaction to messages etc. </p>` ,
            project_link:'https://github.com/Hrishikesh156/Social_Media_App',
            project_img:msg

        },
        {
            project_name:'Face Detection',
            project_desc:` <p>1.Register & sigin<br />
            2. Click detect   <br />
            3. Check your Rank </p>` ,
            project_link:'https://github.com/Hrishikesh156/FaceDetection.git',
            project_img:ML

        },
         {
            project_name:'Sign Language Interpreter',
            project_desc:`<p>Two important features <br />
            1) Sign language to text/speech <br />
            2) Text to corresponding signs.<br />
            </p>` ,
            project_link:'https://github.com/Hrishikesh156/Sign-Language-Interpreter',
            project_img:{Sign}

        }
    ]




    return(
        <div>
            <Navbar />
            <h1 className="title" style={{marginTop:"50px" ,marginLeft:"100px" }}><b>Projects</b></h1>
    <div className="project-cards" id = "project">
      
            <div className="card" >
                <img src={Sign} alt="Avatar" style={{width:300 , height:400}} />
                <div className="container">
                <h4><b>Sign Language Interpreter</b></h4>
                <p>Two important features <br />
                1) Sign language to text/speech <br />
                2) Text to corresponding signs.<br />
</p>
                    <div className="center">
                        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                    <div className="Tilt-inner">
                    <a href="https://github.com/Hrishikesh156/Sign-Language-Interpreter"  target="_blank" rel="noreferrer noopener">
                            <img src={GH} alt="github" />

                        </a> 
                        </div>
                    </Tilt>

                        </div>
                    
                </div>
                </div>


            <div className="card" >
           
            <img src={msg} alt="Avatar" style={{width:300 , height:400}} />
            <div className="container">
            <h4><b>Messaging Application.</b></h4>
            <p>one to one texting, community channel, stories, reaction to messages etc. </p>
                <div className="center">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
               <div className="Tilt-inner">
               <a href="https://github.com/Hrishikesh156/Social_Media_App"  target="_blank" rel="noreferrer noopener">
                    <img src={GH} alt="github" />

                </a> 
                </div>
               </Tilt>

                </div>
 

            </div>
                
            
            </div>
    
           
           <div className="card" >
           
           <img src={Tom} alt="Avatar" style={{width:300 , height:400}} />
           <div className="container">
           <h4><b>Face Detection</b></h4>
           <p>1.Register & sigin<br />
               2. Click detect   <br />
               3. Check your Rank </p>
               <div className="center">
               <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
              <div className="Tilt-inner">
              <a href="https://github.com/Hrishikesh156/FaceDetection.git"  target="_blank" rel="noreferrer noopener">
                   <img src={GH} alt="github" />

               </a> 
               </div>
              </Tilt>

               </div>


           </div>
               
           
           </div> 

         <div className="card" >
         <img src={Robot} alt="Avatar" style={{width:300 , height:400}} />
         <div className="container">
         <h4><b>Search & Create Robots</b></h4>
         <p>Here are various robots and their attribites mentioned on the card.<br />
            Create your own robot cards</p>
            <div className="center">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
               <div className="Tilt-inner">
               <a href="https://github.com/Hrishikesh156/robofriends.git"  target="_blank" rel="noreferrer noopener">
                    <img src={GH} alt="github" />

                </a> 
                </div>
               </Tilt>

                </div>
            
         </div>
         </div>

         <div className="card" >
         <img src={ML} alt="Avatar" style={{width:400 , height:500}} />
         <div className="container">
         <h4><b>Face Identification in Python</b></h4>
         <p>This project is to train ML model to identify someone's face in python. </p>
         <div className="center">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
               <div className="Tilt-inner">
               <a href="https://github.com/Hrishikesh156/FaceIdentification.git"  target="_blank" rel="noreferrer noopener">
                    <img src={GH} alt="github" />

                </a> 
                </div>
               </Tilt>

                </div>
         </div>
         </div>
    </div>


<Footer />
</div>
       
        


    );
}
export default Card;