import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar/Navbar';
import '../App.css';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Service from '../Components/Services/Service';
import MyWork from '../Components/MyWork/MyWork';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

// 🔥 Firebase imports
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
const Home=() => {
  const navigate=useNavigate();
   
  const [darkmode, setdarkmode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ? true : false;
  });

  // 👁 Visitor count state
  const [visitorCount, setVisitorCount] = useState(0);

  // 🌗 Dark mode toggle handling
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkmode ? 'dark' : 'light');
  }, [darkmode]);
  useEffect(()=>{
     AOS.init({
      duration: 1000, // animation duration
      once: true,     // animate only once
    });
  },[])

  // 👀 Track visitors using Firebase Firestore
  useEffect(() => {
    const incrementVisitor = async () => {
      const ref = doc(db, "siteData", "visitors");

      try {
        const docSnap = await getDoc(ref);
        console.log("Total Visitors (Before Increment):", docSnap.data()?.count);

        if (docSnap.exists()) {
          // Increment visitor count
          await updateDoc(ref, { count: increment(1) });

          // Fetch updated count
          const updatedSnap = await getDoc(ref);
          const updatedCount = updatedSnap.data().count;
          setVisitorCount(updatedCount);

          console.log("Visitor count updated to:", updatedCount);
        } else {
          // If no count yet, create with initial 1
          await setDoc(ref, { count: 1 });
          setVisitorCount(1);
          console.log("Visitor count initialized to 1");
        }
      } catch (error) {
        console.error("❌ Error updating visitor count:", error);
      }
    };

    incrementVisitor();
  }, []);
 

  
  // 🖼 UI
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-[#DF8908] to-[#B415FF] ">
      <div className="flex items-center ">
      <span className=" flex-1 text-center sm:text-2xl sm:font-bold text-transparent bg-clip-text bg-slate-200 font-bold text-lg  mt-24 ">
        PERSONAL PORTFOLIO
      </span>
      
      </div>

      {/* 👁 Visitor Count Display */}
      <div className="   text-center my-2 text-base sm:text-lg font-semibold text-white/90">
       {visitorCount} visitors have viewed this portfolio.
      </div>
     
      
      {/* 🔗 Main Sections */}
      <Navbar darkmode={darkmode} setdarkmode={setdarkmode} />
      <section  id='home'><Hero darkmode={darkmode} setdarkmode={setdarkmode} /></section>
      <section id='about'><About /></section>
      
     <section id="service"><Service /></section> 
     <section id="work"><MyWork /></section> 
     <section id="contact"><Contact /></section> 
     <section id="footer"><Footer /></section> 

      {/* 🔔 Toast Notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} /></div>
    </>
  );
}

export default Home;
