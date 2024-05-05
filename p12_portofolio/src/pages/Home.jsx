import React from "react";
import Navigation from "../components/Navigation";
import  HeroSection  from "../components/HeroSection";
import Footer from "../components/Footer";
import BannerImage from "../assets/img/eberhard-min.webp"
import MyProjects from "../components/MyProjects";
import MySkills from "../components/MySkills";

const Home = () => {
  return (
    <div>
        <Navigation />
        <HeroSection imgbanner={BannerImage} 
        title={ <span>Welcome<br /> to my portofolio! <br /> I'm Amandine</span>}
        />
        <MyProjects/>
        <MySkills/>
        <Footer id="footer"/>
    </div>
  );
};

export default Home;
