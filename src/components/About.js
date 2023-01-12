import React from "react";

function About() {
    return (
        <>
            <h2>About Me</h2>
            <section class='about-para'>
                <p>I am a Junior Software Developer with a background in Diversity, Equity & Inclusion.</p>
                
                <p>After 7 years of working in the tech industry in non-engineering roles, I followed my passion for learning new skills and successfully completed the 16 week intensive Professional Software Development course at CodeClan.</p>
                
                <p>I continue to be passionate about DEI and hope that combining my programming abilities with the core skills I have from previous roles will equip me to make a positive and meaningful impact in the world of tech.
                </p>
                <p><b><a href="/timeline">Learn more about my career path here</a></b></p>
            </section>
            <div class= "flex">
            <section class='about-para'>
                <h3>Achievements</h3>
                <p>Quarterly Award Winner twice for lead role in LGBTQ+ & DEI initiatives. (Skyscanner, 2019 & 2020)</p>
                <p>CEO Award for establishing and leading the first LGBTQ+ Network (Skyscanner, 2017).</p>
            </section>
            <section class='about-para'>
                <h3>Hobbies</h3>
                <p>DIY Campervan Conversion</p>
                <p>Photography & Writing</p>
                <p>Scuba Diving</p>
            </section>
            </div>
        </>
    )
}
export default About;