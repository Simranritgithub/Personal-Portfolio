import React from "react";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "761dbc3a-9a7a-4923-ab49-efc8da0dfd2f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    } else {
      console.error("Error", res);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently looking for a full-stack or web developer internship and
            available to take on new projects. So kindly contact me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z"></path>
                <polyline points="4,8 12,12 20,8"></polyline>
              </svg>
              <p>simranrout8796@gmail.com</p>
            </div>
            <div className="contact-detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.77 19.77 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.06 6.81 19.77 19.77 0 0 1 0 2.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72 14 14 0 0 0 .81 3.21 2 2 0 0 1-.45 2.11L6.09 9a16 16 0 0 0 9 9l2-1.37a2 2 0 0 1 2.11-.45 14 14 0 0 0 3.21.81A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <p>9667265765</p>
            </div>

            <div className="contact-detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5 7 13 7 13s7-8 7-13c0-3.87-3.13-7-7-7z"></path>
                <circle cx="12" cy="9" r="2"></circle>
              </svg>
              <p>Dilshad Garden, Delhi</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form  className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />

          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
