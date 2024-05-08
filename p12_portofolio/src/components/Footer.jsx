import React from 'react';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_42rww0z', 'template_1phqwdd', event.target, 'Tw2GbAbSsyjkybULR')
        .then((result) => {
            console.log(result.text);
            event.target.reset();
            alert('Message envoyé !');
        }, (error) => {
            console.log(error.text);
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
        });
    };

    return (
        <div id="footer">
<form className='form__contenair' onSubmit={handleSubmit}>
  <label className='form__title' htmlFor="user_name">Name:</label>
  <input className='form__mail' type="text" id="user_name" name="user_name" required />

  <label className='form__title' htmlFor="user_email">Email:</label>
  <input className='form__mail' type="email" id="user_email" name="user_email" required />

  <label className='form__title' htmlFor="message">Message:</label>
  <textarea className='form__message' id="message" name="message" required />

  <button className='form__button' type="submit">Envoyer</button>
</form>
        </div>
    );
};

export default Form;