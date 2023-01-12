import React from "react";
import anime from 'animejs';
import { useEffect } from "react";

const Home = () => {

    const gridanime = (() => {
        anime({
            targets: '#icon',
            scale: [
                { value: .001, easing: 'easeOutSine' },
                { value: 1, easing: 'easeInOutQuad' }
            ],
            delay: anime.stagger(150, { grid: [3, 5], from: 'center' })
        })
    })

    useEffect(()=>{
        gridanime()
    })
    
    return (
        <div>
            <h3>Full Stack Software Developer</h3>
            <section id='skills-box'>
                <h3>Technical Skills</h3>
                <ul>
                    <li id="icon"><i class="devicon-python-plain-wordmark"></i></li>
                    <li id="icon"> <i class="devicon-javascript-plain "> </i></li>
                    <li id="icon"><i class="devicon-react-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-html5-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-css3-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-postgresql-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-mongodb-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-flask-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-java-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-wordpress-plain-wordmark "></i></li>
                    <li id="icon"><i class="devicon-canva-original "></i></li>
                    <li id="icon"><i class="devicon-github-original-wordmark "></i></li>
                </ul>
            </section>
        </div>
    )
};

export default Home;