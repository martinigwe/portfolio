import React from "react";

const Data =() => {

    return (
        <div className="home__data">
            <h1 className="home__title">Igwe Martin </h1>
            <h3 className="home__subtitle">Full Stack Developer</h3>
            <p className="home__description">I'm a full stack developer based in Nigeria, I'm very passionate and dedicated
            to my work.
            </p>
            <a href="#contact" className="button button--flex">
                Say Hello
                {/* <svg 
                  class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path fill="var(--container-color)">
                    
                  </path>
                  <path fill="var(--container-color)">
                    
                  </path>

                </svg> */}
            </a>
        </div>
    );
    
};

export default Data;