import React from "react";
import {ReactComponent as Git} from "./assets/github.svg";
import {ReactComponent as In} from "./assets/likedin.svg";

function Header() {
    return (
    <div className="header">
        <div className="box"></div>
        <div className="avatar-container">
            <div className="avatar-face">

            </div>
            <div className="avatar-desc">
                <h1>j apuãmelo</h1>
                <p><span>Back-end</span> Developer trying to be <span>Fullstack</span> :)</p>
            </div>
        </div>
        <p>Hello, there! I'm <span>João Apuã de Melo</span>. Welcome to my personal portfolio. Developer back-end in 
            Nodejs, C#, Java and in love for drawing things and codes.
        </p>
        <div className="social-media">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-apu%C3%A3-melo" 
            target={"_blank"}
            rel="noreferrer"
            >
                <In />
            </a>
            <a href="https://github.com/japuamelo" 
            target={"_blank"}
            rel="noreferrer"
            >
                <Git />
            </a>
        </div>
    </div>
    ); 
}

export default Header;