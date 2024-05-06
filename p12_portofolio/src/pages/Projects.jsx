import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';


const Projects = () => {
    const { id } = useParams();
    return (
        <div id='Projets__page'>
            <Navigation />
            <ProjectDetails/>
            <Footer/>
        </div>
    );
};

export default Projects;