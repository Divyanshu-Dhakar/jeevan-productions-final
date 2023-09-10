import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div> 
        <h1>CONTACT US</h1>
      <div className="container" id="contact">

  <main className="row">
    {/*  *******   Left Section (Column) Starts   *******  */}
    <section className="col left">
      {/*  *******   Title Starts   *******  */}
      <div className="contactTitle">
        <h2>Get In Touch</h2>
        <p>Let's have a talk to study your buisness</p>
      </div>
      {/*  *******   Title Ends   *******  */}
      {/*  *******   Contact Info Starts   *******  */}
      <div className="contactInfo">
        <div className="iconGroup">
          <div className="icon">
            <i className="fa-regular fa-clock" />{" "}
          </div>
          <div className="details">
            <span>Availability</span>
            <span>24 x 7</span>
          </div>
        </div>
        <div className="iconGroup">
          <div className="icon">
            <i className="fa-solid fa-envelope" />
          </div>
          <div className="details">
            <span>Email</span>
            <span>teamjeevanmanagement@gmail.com</span>
          </div>
        </div>
        <div className="iconGroup">
          <div className="icon">
            <i className="fa-solid fa-location-dot" />
          </div>
          <div className="details">
            <span>Location</span>
            <span>Kansas City, USA | Worldwide</span>
          </div>
        </div>
      </div>
      {/*  *******   Contact Info Ends   *******  */}
      {/*  *******   Social Media Starts   *******  */}
      <div className="socialMedia">
        <a target="_blank" href="https://www.facebook.com/jeevanproduction">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a target="_blank" href="https://www.instagram.com/jeevan_productions/">
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
      {/*  *******   Social Media Ends   *******  */}
    </section>
    {/*  *******   Left Section (Column) Ends   *******  */}
    {/*  *******   Right Section (Column) Starts   *******  */}
    <section className="col right">
      {/*  *******   Form Starts   *******  */}
      <form
        className="messageForm"
        action="https://formsubmit.co/teamjeevanmanagement@gmail.com"
        method="POST"
      >
        <div className="inputGroup halfWidth">
          <input type="text" name="" required="required" id="name" />
          <label>Your Name</label>
        </div>
        <div className="inputGroup halfWidth">
          <input type="email" name="email" required="required" id="email" />
          <label>Email</label>
        </div>
        <div className="inputGroup fullWidth">
          <input type="text" name="subject" required="required" id="subject" />
          <label>Subject</label>
        </div>
        <div className="inputGroup fullWidth">
          <textarea
            required="required"
            name="message"
            id="message"
            defaultValue={""}
          />
          <label>Say Something</label>
        </div>
        <div className="inputGroup fullWidth">
          <button type="submit" onclick="sendMail()">
            Send Message
          </button>
        </div>
      </form>
      {/*  *******   Form Ends   *******  */}
    </section>
    

    {/*  *******   Right Section (Column) Ends   *******  */}
  </main>
</div>

    </div>
  )
}

export default Contact
