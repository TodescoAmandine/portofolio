import React from 'react';
import projectsData from '../about.json';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(project => project.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    const { image, title, content, tags } = project;

    return (
        <div className='projectdetails__container'>
            <img className='projectdetails__image' src={image} alt="" />
            <div className='projectdetails__content'>
                <div> 
                    <h3 className='projectdetails__content--h3'>{title}</h3>
                    <p className='projectdetails__content--p'>{content}</p>
                </div>
                <p className='projectdetails__content--link'>View in Github <i className="fa-solid fa-arrow-up"></i></p>
                <p className='projectdetails_content--tags'>{tags}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;