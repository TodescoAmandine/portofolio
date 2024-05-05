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
        about={ <span>I'm a web junior developper. For me the web is a place where I can express my creativity and my passion for technology. I'm always looking for new challenges and I'm ready to learn new things. I'm a hard worker.
        </span>}
        />
        <MyProjects/>
        <MySkills/>
        <Footer id="footer"/>
    </div>
  );
};

export default Home;
