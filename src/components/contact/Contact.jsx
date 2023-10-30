import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import Swal from 'sweetalert2'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_19keqxw', 'template_t4yt1mj', form.current, '4L5-3N-emiWLhQ0uM')
        e.target.reset()
     
    };

         function handleClick() {
        Swal.fire({
//   position: 'top-end',
  icon: 'success',
  title: 'Sent!',
  showConfirmButton: false,
  timer: 1500
})
      }

  
    return (

    
      
         

        <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        
        <span className="section__subtitle">Contact Me</span>
        
        <div className="contact__container container grid">
        
        <div className="contact__content">
           <h3 className="contact__title">Talk to me</h3>
        
           <div className="contact__info">
               <div className="contact__card">
                   <i className="bx bx-mail-send contact__card-icon"></i>
        
                   <h3 className="contact__card-title">Email</h3>
                   <span className="contact__card-data">igwem94@gmail.com</span>
        
                   <a href="mailto:igwem94@gmail.com" className="contact__button">Write me {""}<i
                    className="bx bx-right-arrow-alt contact__button-icon"></i></a>
               </div>
               <div className="contact__card">
                   <i className="bx bxl-whatsapp  contact__card-icon"></i>
        
                   <h3 className="contact__card-title">Whatsapp</h3>
                   <span className="contact__card-data">08141805488</span>
        
                   <a href="https://wa.me/+23408141805488" className="contact__button">Write me {" "} <i
                    className="bx bx-right-arrow-alt contact__button-icon"></i></a>
               </div>
               <div className="contact__card">
                   <i className="bx bxl-linkedin contact__card-icon"></i>
        
                   <h3 className="contact__card-title">LinkedIn</h3>
                   <span className="contact__card-data">Igwe martin</span>
        
                   <a href="https://www.linkedin.com/in/martin-igwe-061263267" className="contact__button">Write me {" "} <i
                    className="bx bx-right-arrow-alt contact__button-icon"></i></a>
               </div>
           </div>
        </div>
        
        
        <div className="contact__content">
           <h3 className="contact__title">Write me your project</h3>
        
        
           <form ref={form} onSubmit={sendEmail} className="contact__form">
               <div className="contact__form-div">
                   <label className="contact__form-tag">Name</label>
                   <input type="text" name="name" 
                   className="contact__form-input"
                   placeholder="Insert your name"
                   />
               </div>
        
        
               <div className="contact__form-div">
                   <label className="contact__form-tag">Mail</label>
                   <input type="emai" name="email" 
                   className="contact__form-input"
                   placeholder="Insert your email"
                   />
               </div>
        
               <div className="contact__form-div contact__form-area">
                   <label className="contact__form-tag">Project</label>
                   <textarea name="project" id="" cols="30" rows="10"
                   className="contact__form-input" placeholder="Write your project"></textarea>
               </div>
               <button onClick={true ?handleClick:null} className="button button--flex"> Send Message</button>
           </form>
        </div>
        </div>
        
        
        
        </section>
      
    )
}


export default Contact;
