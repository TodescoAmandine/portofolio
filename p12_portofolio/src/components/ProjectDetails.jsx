import React from 'react';
import projectsData from '../about.json';
import { useParams } from 'react-router-dom';
import IconeGit from '../assets/img/Octicons-mark-github.png';
import { Link } from 'react-router-dom';
import Error404 from '../components/Error404'; // Import the Error404 component


const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(project => project.id === id);

    if (!project) {
        return <Error404 />; // Render the Error404 component if the project is not found
      }

    const { image_details, title, content, tags } = project;

    return (
        <div id='details_page'>
        <div className='projectdetails__container'>
        <Link className='button' to="/">
             <button className='projectdetails__button'><i id='arrow__back' className="fa-solid fa-arrow-up"></i>Back</button>
        </Link>            
        <img className='projectdetails__image' src={image_details} alt="" />
            <div className='projectdetails__content'>
            
                    <h3 className='projectdetails__content--title'>{title}</h3>
               
                    <div className='projectdetails__contents'> 
                    <p className='projectdetails__content--p'>{content}</p>
                    <div className='projectdetails__links'>
                        <p className='projectdetails__content--link'>View in Github <i className="fa-solid fa-arrow-up"></i></p>
                
                        <img className='projectdetails__content--git' src={IconeGit} alt="" />
                        <p className='projectdetails__content--link'>View Web page <i className="fa-solid fa-arrow-up"></i></p>
                        </div>
                        
                  </div>
                  {/* {console.log('tags:', tags)} */}
                  <div className='projectdetails_content--tags'>
                    {tags.split(', ').map((tag, index) => (
                        <button key={index} className='tag-button'>
                        {tag}
                        </button>
                    ))}
                    </div>
            </div>
            </div>
        </div>
    );
};

export default ProjectDetails;