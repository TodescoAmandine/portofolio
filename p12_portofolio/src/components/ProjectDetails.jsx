import React from 'react';

const ProjectDetails =({ image, title, content,tags }) => {
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