import React from "react";
import css from "./Hero.module.css";
import illustration1 from "../../assets/Illustration 1.svg";


const Hero = () => { 

    return (
        <div className={css.heroContainer}>


            <div className={css.left}>
            <h1>Want anything to be <br/> easy with <span className={css.bold}>LaslesVPN.</span></h1>
            <p className={css.pleft}>Provide a network for all your needs with ease and fun using <br/>
            <span>LaslesVPN</span> <br/> discover interesting features from us.</p>
            <button className={css.button}>Get Started</button>
            </div>

            <div className={css.right}>
            <img className={css.illu1} src={illustration1} alt="hero" border="0" />
            </div>

            
        </div>
    )
}

export default Hero;