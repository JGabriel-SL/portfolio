import React from 'react';
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
     return (
         <section id='contact'>
             <h5>Get in Touch</h5>
             <h2>Contact Me</h2>

             <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>jgabriel44@gmail.com</h5>
                        <a href="mailto:jgabriel44@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+55 (85) 99902-1842</h5>
                        <a href="https://api.whatsapp.com/send?phone=5585999021842" target='_blank'>Send a message</a>
                    </article>
                </div>

                <form action="">
                    <input type="text" name='name' placeholder='Your full name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" placeholder="Your message" rows="7" required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
             </div>
         </section>
     )
}

export default Contact