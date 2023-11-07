import React from "react";
import "./about.css";
import AboutImg from "../../assets/avatar.avif";
import CV from "../../assets/sample.pdf"
import Info from "./Info";


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        Hello  i'm Igwe Martin, a versatile Full-Stack Developer with a passion
                        for crafting seeamless and interactive web applications. with a background in both front-end
                        and back-end technologies, i thrive on bringing ideas to life in the digital realm
                    </p>
                    <a download="" href={CV} className="button button--flex">Download CV</a>
     
                </div>
            </div>
        </section>
    )
}



export default About;