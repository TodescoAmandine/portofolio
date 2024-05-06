import React from 'react';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Message envoyé !');
    };

    return (
        <div id="footer">
            <form className='form__contenair' onSubmit={handleSubmit}>
                <label  className='form__title' htmlFor="email">Email:</label>
                <input className='form__mail' type="email" id="email" required />

                <label className='form__title' htmlFor="message">Message:</label>
                <textarea className='form__message' id="message" required />

                <button className='form__button' type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Form;