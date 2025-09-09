import "../../styles/Contact.css";
export const ContactInfo = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-left">
          <h4>Let's stay connected</h4>
          <p>
            It's never been easier to get in touch with favex. Call us, use our
            live chat widget or email and we'll get back to you as soon as
            possible!
          </p>
          <div className="contact-card">
            <p>Email Address</p>
            <a href="#">support@favexapp.com</a>
          </div>

          <div className="contact-card">
            <p>Call / Chat</p>
            <a href="#">08148736835</a>
          </div>

          <div className="contact-card">
            <p>Follow on all social platform</p>
            <a href="#">support@favexapp.com</a>
          </div>
        </div>
        <div className="contact-right">
          <p>
            To get in touch with us. Fill the contact details form with your
            inquiry, queries or assistant.
          </p>
          <p>Our customer representatives will contact you within 24hrs.</p>
          <br />
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Message</label>
          <textarea placeholder="Message"></textarea>
          <button>Submit Message</button>
        </div>
      </div>
    </>
  );
};
