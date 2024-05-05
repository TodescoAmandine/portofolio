import React from 'react';
import Card from './Card';
import CardGrid from './CardGrid';

const MyProjects = () => {
    return (
        <section id='projects' className='projects__container'>        
            <div className='projects__content'>
                <h2 className='projects__content--title'>My Projects</h2>
                <p className='projects__content--p'>Here are some projects that I carried out during my training with OpenClassroom. I take pleasure in presenting them to you because each of them has allowed me to develop and improve my skills.</p>
            </div>
            <div className='projects__cards'>
              <CardGrid />
            </div>
        </section>
    );
};

export default MyProjects;