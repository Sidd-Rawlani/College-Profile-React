import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Education.css'
import { Chrono } from "react-chrono";
const Education = () =>{
    const items = [
      {
        title: "2020-2024",
        cardTitle: "Vivekanand Education Society's Institute Of Technology (VESIT)",
        url: "https://vesit.ves.ac.in/",
        cardSubtitle:"Vivekanand Education Society's Institute of Technology, also known as VESIT or V. E. S. Institute of Technology, was established in 1984 as an engineering college affiliated with the University of Mumbai.",
        cardDetailedText: "IT CGPA: 9+",
       
      },
      {
        title: "June 2020",
        cardTitle: "B. K. Birla College, Kalyan",
        url: "https://www.bkbirlacollegekalyan.com/default.aspx",
        cardSubtitle:"Birla College of Arts, Science & Commerce, established in 1972, is an affiliate of the University of Mumbai. It is accredited by National Assessment and Accreditation Council awarded with 'A' Grade is a multi-faculty institution of higher education with an enrolment of more than 11,900 students",
        cardDetailedText: "HSC: 85.54%",
        
      },
      {
        title: "June 2018",
        cardTitle: "Adarsh Vidya Mandir School",
        cardSubtitle:'Adarsh Vidya Mandir in Badlapur, Thane, Mumbai is a top player in the category Marathi Medium Schools in the Thane, Mumbai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Thane, Mumbai. Over the course of its journey, this business has established a firm foothold in it’s industry.',
        
        cardDetailedText: "SSC: 98%",
        
      }
    ];
    return(
        <>
        <Navbar />
        <h1>Education</h1>
         {/* <div id="Education" className="content">
             <h1 style={{marginTop:40}}><b>Education </b></h1>
             <h3>Bachelors degree in Information Technology</h3>
             <h3>Vivekanand Education Society's Institute Of Technology</h3>
             <h3>2020-2024</h3>
        </div> */}
        <div style={{ width: '80%',height:'100%',display:'flex',justifyContent:'center' }}>
                <Chrono items={items} slideShow mode="VERTICAL_ALTERNATING" />
                </div>

        <Footer />
        </>
       
       

    );
}
export default Education;