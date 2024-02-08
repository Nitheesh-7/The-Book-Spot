import React, {useRef} from "react";
import './footer.style.css'
import emailjs from '@emailjs/browser'

const Footer = () => {
    const form = useRef()
    const serviceId = "service_lj4h9j5"
    const templateId = "template_2ttri24"
    const publicKey = "lrb3dM663SMu60UYA"

    const handleSubmit = (event) => {
        event.preventDefault()
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((response) => {
            console.log(response.text)
        })
        .catch((error) => {
            console.log(error.text)
        })

        event.target.reset()
    }

    return (
        <section className="footer-container">
            <div className="container">
                <h2>Queries Here.</h2>

                <form onSubmit={handleSubmit} ref={form} className="footer-form">
                    <div className="form-group">
                            <label htmlFor="name"  className="form-label">Name:</label>
                            <input type="text" name="user_name" id="name" className="form-input" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email"  name="user_email" className="form-input" id="email" placeholder="Enter your Email" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Query</label>
                        <textarea className="form-input" name="message" id="query" placeholder="Type your Query" required></textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="form-submit" value="Submit" />
                    </div>
                </form>

                <p>&copy; 2023 The Book Store. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default Footer