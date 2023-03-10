import css from './form.module.css';
import React, { useState, useRef } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import emailjs from '@emailjs/browser';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const sendEmail = event => {
    event.preventDefault();
    if (!name || !email || !subject || !message) {
      return Notify.failure('Enter all fields in form!', {
        width: '200px',
        position: 'center-center',
        distance: '10px',
        opacity: 1,
        borderRadius: '2px',
      });
    } else {
      emailjs
        .sendForm(
          'service_7iz1nuk',
          'template_rau1uj8',
          form.current,
          'g7-WjxSWoov268bP8'
        )
        .then(
          () => {
            Notify.success('Your message sent');
            console.log('Email send');
            reset();
          },
          () => {
            Notify.failure('Message not sent, please try again later!');
            throw console.error('Email not send');
          }
        );
    }
  };

  return (
    <>
      <form className={css.form} ref={form} onSubmit={sendEmail}>
        <div className={css.input_wrapper}>
          <input
            className={css.form_input}
            placeholder=" "
            value={name}
            type="text"
            name="name"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="5"
            maxLength="30"
            required
            onChange={handleInputChange}
          ></input>
          <label className={css.form_label}>Your name</label>
        </div>
        <div className={css.input_wrapper}>
          <input
            className={css.form_input}
            placeholder=" "
            value={email}
            type="email"
            name="email"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="5"
            maxLength="30"
            required
            onChange={handleInputChange}
          ></input>
          <label className={css.form_label}>Your email</label>
        </div>
        <div className={css.input_wrapper}>
          <input
            placeholder=" "
            className={css.form_input}
            value={subject}
            type="text"
            name="subject"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="3"
            maxLength="150"
            required
            onChange={handleInputChange}
          ></input>
          <label className={css.form_label}>Subject</label>
        </div>
        <div className={css.input_wrapper}>
          <textarea
            placeholder=" "
            className={css.form_input_message}
            value={message}
            type="text"
            name="message"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="20"
            maxLength="500"
            required
            onChange={handleInputChange}
          ></textarea>
          <label className={css.form_label}>Message</label>
        </div>
        <button className={css.form_button} type="submit" onClick={sendEmail}>
          send
        </button>
      </form>
    </>
  );
};
export default Form;
