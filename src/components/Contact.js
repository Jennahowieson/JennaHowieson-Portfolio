import React from "react";

function Contact() {
    return (
        <>
            <h2>Let's Connect</h2>
            <ul>
                <li className="contact-box"><a href="mailto:thejennaway@outlook.com"> Email Me: thejennaway@outlook.com </a></li>
                <li className="contact-box">
                    <a href="https://www.linkedin.com/in/thejennaway/" target="_blank">Connect On LinkedIn</a>
                </li>
                <a href="TechnicalCV.pdf" target="_blank"><li className="contact-box">Download My CV</li></a>
            </ul>
        </>
    )
}
export default Contact;