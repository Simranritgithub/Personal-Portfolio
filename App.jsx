import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  

  return (
    <>

   <div className="Personal"> PERSONAL PORTFOLIO</div>
   <Navbar></Navbar>
   <Hero></Hero>
   <About></About>
   <Service></Service>
   <MyWork></MyWork>
   <Contact></Contact>
   <Footer></Footer>
    </>
  )
}

export default App
