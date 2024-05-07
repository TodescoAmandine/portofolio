import React from 'react';
import projectsData from '../about.json';
import { useParams } from 'react-router-dom';
import IconeGit from '../assets/img/Octicons-mark-github.png';
import { Link } from 'react-router-dom';


const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(project => project.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    const { image_details, title, content, tags } = project;

    return (
        <div>
        <div className='projectdetails__container'>
        <Link to="/">
             <button>Back</button>
        </Link>            
        <img className='projectdetails__image' src={image_details} alt="" />
            <div className='projectdetails__content'>
            
                    <h3 className='projectdetails__content--title'>{title}</h3>
               
                    <div className='projectdetails__contents'> 
                    <p className='projectdetails__content--p'>{content}</p>
                    <div className='projectdetails__links'>
                        <p className='projectdetails__content--link'>View in Github <i className="fa-solid fa-arrow-up"></i></p>
                
                        <img className='projectdetails__content--git' src={IconeGit} alt="" />
                        </div>
                  </div>
                <p className='projectdetails_content--tags'>{tags}</p>
            </div>
            </div>
        </div>
    );
};

export default ProjectDetails;