import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Contact.css'
const Contact = () =>{
    return(
        <>
        <Navbar />
         <div className="contact" id="contact">
            <h1 ><b>Contact</b></h1>

<a href="https://twitter.com/Hrishi_156" target="blank"><img className="icons" align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="Hrishikesh" height="30" width="40" /></a>
<a href="https://www.linkedin.com/in/hrishikesh-kumbhar-a86319206/" target="blank"><img align="center" className="icons" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="Hrishikesh" height="30" width="40" /></a>
<a href="https://www.instagram.com/hrishikesh_kumbhar15/" target="blank"><img align="center" className="icons"  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="Hrishikesh" height="30" width="40" /></a>
        </div>
        {/* <Footer /> */}
        </>
       
    );
}

export default Contact;