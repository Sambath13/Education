import './Contact.css'

import React from 'react'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "46c1981e-d01f-4894-a2c0-9fb795b12db6");

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
      <div className='contact-col'>
        <h3>Send us a message <img src='image/msg-icon.png' alt='' /> </h3>
        <p>Fell free to reach out through contact from or find our contact information below.Your feedback , question and  suggestion are
          importent to us we strive to provide exceptional service to our university community. </p>
        <ul>
          <li> <img src='image/mail-icon.png' alt='' />Gokulsambath</li>
          <li> <img src='image/phone-icon.png' alt='' /> 9789766085</li>
          <li> <img src='image/location-icon.png' alt='' />  3/A South New Street Theni  <br />Theni-625531 </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required />

          <label>Phone no</label>
          <input type='tel' name='phone' placeholder='Enter your phone no' required />

           <label>Write your message</label>
          <textarea name='message' rows='6' placeholder='Enter your msg' required />

          <button type='submit' className='btn'> Submit now</button>
          
        </form>
        <span>{result} </span>
      </div>
    </div>
  )
}

export default Contact
