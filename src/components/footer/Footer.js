import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";
import facebook from "../../assets/Facebook.png";
import twitter from "../../assets/Twitter.png";
import instagram from "../../assets/Instagram.png";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <p className={css.logotext}>
            LaslesVPN is a private virtual network that
            has unique features and has high security.
          </p>
          

          <div className={css.social}>
            <img className={css.socialimg} src={facebook} alt="" />
            <img className={css.socialimg} src={twitter} alt="" />
            <img className={css.socialimg} src={instagram} alt="" />
          </div>

          <div className={css.copyRight}>
            <span>
              {" "}
              ©️2020lasles<strong>VPN</strong>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Product</span>
            <span className={css.pngLine}>Download</span>
            <span className={css.pngLine}>Pricing</span>
            <span className={css.pngLine}>Locations</span>
            <span className={css.pngLine}>Server</span>
            <span className={css.pngLine}>Countries</span>
            <span className={css.pngLine}>Blog</span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Engage</span>
            <span className={css.pngLine}>LaslesVPN ?</span>
            <span className={css.pngLine}>FAQ</span>
            <span className={css.pngLine}>Tutorials</span>
            <span className={css.pngLine}>About Us</span>
            <span className={css.pngLine}>Privacy Policy</span>
            <span className={css.pngLine}>Terms of Service</span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Earn Money</span>
            <span className={css.pngLine}>Affiliate</span>
            <span className={css.pngLine}>Become Partner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
