import React from 'react';
import IconeGit from '../assets/img/Octicons-mark-github.png';

const Card = ({ image, title, content,tags }) => {
    return (
        <div className='card'>
            <img className='card__image' src={image} alt="" />
            <div className='card__content'>
                <div> 
                    <h3 className='card__content--h3'>{title}</h3>
                        <p className='card__content--p'>{content}</p>
                </div>
                <div className='card__content--links'>  
                <div>  
                    <p className='card__content--link'>Plus en détail <i className="fa-solid fa-arrow-up"  ></i></p></div>
                    <div>  
                    <img className='card__content--git' src={IconeGit} alt="" /></div>
                </div>
                    <p className='cards_content--tags'>{tags}</p>
            </div>
        </div>
    );
};

export default Card;