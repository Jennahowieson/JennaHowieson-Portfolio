import React from "react";
import avatar from "../static/Avatar.svg";

function Contact() {
    return (
        <>
            <h2>Let's Connect</h2>
            <img className="avatar" src={avatar} alt="graphic of woman at computer"/>
            <ul>
                <li className="contact-box"><a href="mailto:thejennaway@outlook.com"> Email Me: thejennaway@outlook.com </a></li>
                <li className="contact-box">
                    <a href="https://www.linkedin.com/in/thejennaway/" target="_blank" rel="noopener noreferrer"><i class="devicon-linkedin-plain"></i>  Connect On LinkedIn</a>
                </li>
                <a href="TechnicalCV.pdf" target="_blank" rel="noopener noreferrer"><li className="contact-box">Download My CV</li></a>
            </ul>
        </>
    )
}
export default Contact;