import './App.css';
import Navbar from '../src/Components/Navbar/Navbar.js'
import Slider from '../src/Components/Slider/Slider.js'
import Services from '../src/Components/Services/Services.js'
import Portfolio from '../src/Components/Portfolio/Portfolio.js'
import About from '../src/Components/About/About.js'
import Testimonial from '../src/Components/Testimonial/Testimonial.js'
import Contact from '../src/Components/Contact/Contact.js'
import Footer from '../src/Components/Footer/Footer.js'
import Features from '../src/Components/Features/Features.js'
import Fade from 'react-reveal/Fade';

function App() {
  return (
<>      
<Navbar/>
      <Slider/>  
     <Fade bottom><Services/>
      <Features/>
      <Portfolio/>
      <About/>
      <Testimonial/>
      <Contact/>
      </Fade> 
      <Footer/>
      </>  );
}

export default App;
