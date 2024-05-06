import React from 'react';
import html from '../assets/img/HTML5_logo_and_wordmark.png';
import css from '../assets/img/CSS3_logo_and_wordmark.png';
import sass from '../assets/img/768px-Sass_Logo_Color.png';
import js from '../assets/img/JavaScript-logo.png';
import reactapp from '../assets/img/React-icon.png';
import redux from '../assets/img/800px-Redux_Logo.png';
import git from '../assets/img/Octicons-mark-github.png';


const MySkills = () => {
    return (
        <section id='skills'>
            <div>
                <h2 className='skills__content--title' >My Skills</h2>
                <p className='skills__content--p'>During my training with OpenClassroom, I have acquired a variety of skills related to website development. I am proficient in building websites from scratch and utilizing frameworks such as React. Additionally, I am experienced in using preprocessors like Sass, version control systems like Git, package managers like npm, and module bundlers like Webpack. Overall, I have a well-rounded skill set that allows me to create high-quality websites efficiently.
                   </p>
                   <div id='skills_container--icones'> 
                   <img className='skills--icones' src={html} alt="" />
                   <img className='skills--icones' src={css} alt="" />
                   <img className='skills--icones' src={sass} alt="" />
                   </div>
                   <div id='skills_container--icones'> 
                   <img className='skills--icones' src={js} alt="" />
                   <img className='skills--icones' src={reactapp} alt="" />
                   <img className='skills--icones' src={redux} alt="" />
                   </div>
                   <div id='skills_container--icones'> 
                   <img className='skills--icones' src={git} alt="" />
                   </div>
            </div>
        </section>
    );
};

export default MySkills;