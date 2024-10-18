import React from 'react';
import './Contacts.css';
import msg_icon from './assets/msg-icon.png';
import mail_icon from './assets/mail-icon.png';
import phone_icon from './assets/phone-icon.png';
import location_icon from './assets/location-icon.png';
import white_arrow from './assets/white-arrow.png';
function Contacts() {
  
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9d3ec79f-74b2-4bee-a8ce-8cf97e6a6bea");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    
  return (
    
      <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message<img src={msg_icon}alt=''/></h3>
          <p>Feel free to reach out through the contact form or find 
             our contact information below. Your feedback, questions, and suggestions are important to us as
             we strive to provide exceptional service to our university community.
          </p>
          <ul>
             <li><img src={mail_icon}alt=''/>Contact@GreatStack.dev</li>
             <li><img src={phone_icon}alt=''/>+1 123-456-7890</li>
             <li><img src={location_icon}alt=''/>77 Massachusetts Ave, Cambridge<br/> MA 02139, United States</li>
         </ul>
        </div> 
        <div className="contact-col">
          <form onSubmit={onSubmit}>
           
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your Name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required/>
            <label>Write Your Message Here</label>
            <textarea name='message' rows="6" placeholder='Enter Your Message'required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow}alt=''/></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  
    
  )
}

export default Contacts
