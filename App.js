import React from "react";
import "./index.css"
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Navbar/Hero/Hero";
import Program from "./Component/Navbar/Program/Program";
import Title from "./Component/Navbar/Title/Title";
import About from "./Component/Navbar/About/About";
import Campus from "./Component/Navbar/Cmpus/Campus";
import Test from "./Component/Navbar/Test/Test";
import Contact from "./Component/Navbar/Contact/Contact";
import Footer from "./Component/Navbar/Footer/Footer";




function App() {

  return (
    <div>

       <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Program' Title='What we Offer' />
        <Program />
        <About />
        <Title subtitle='Gallery' Title='Cmpus Photos' />
        <Campus/>
        <Title subtitle='Testmonials' Title=' What Student Says' />
        <Test/>
        <Title subtitle='Contact Us' Title='Get in Touch' />
        <Contact/>
        <Footer/>
      </div> 


    </div>

  );
}

export default App;
