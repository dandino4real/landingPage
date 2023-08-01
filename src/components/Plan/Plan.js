import React from "react";
import css from "./Plan.module.css";
import free from "../../assets/Free.svg";
import good from "../../assets/Group 1120.png";
import global from "../../assets/Huge Global.svg";
import sponsored from "../../assets/Sponsored.svg";

function Plan() {
  return (
    <div className={css.plan}>
      <div className={css.planTop}>
        <div className={css.freeText}>
          <h2 className={css.h21}> Choose Your Plan</h2>
          <p>
            Let's choose the package that is best for you and explore it happily
            and <br /> cheerfully.
          </p>
        </div>
        <div className={css.freeCover}>
          <div className={css.free}>
            <div className={css.freeContainer}>
              <img className={css.freeImg} src={free} alt="free" border="0" />
              <h3 className={css.h3}>Free Plan</h3>
              <ul className={css.fList}>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Unlimited bandwidth</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Encrypted connection</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>No traffic logs</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Works on all devices</span>
                </li>
              </ul>

              <h2 className={css.h2}>Free</h2>
              <button className={css.button}>Select</button>
            </div>
          </div>
          <div className={css.free}>
            <div className={css.freeContainer}>
              <img className={css.freeImg} src={free} alt="free" border="0" />
              <h3 className={css.h3}>Standard Plan</h3>
              <ul className={css.fList}>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Unlimited bandwidth</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Encrypted connection</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Yes Traffic logs</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Works on all devices</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Connect anywhere</span>
                </li>
              </ul>

              <h2 className={css.h2}>$9/ mo</h2>
              <button className={css.button}>Select</button>
            </div>
          </div>
          <div className={css.free}>
            <div className={css.freeContainer}>
              <img className={css.freeImg} src={free} alt="free" border="0" />
              <h3 className={css.h3}>Premium Plan</h3>
              <ul className={css.fList}>
              <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Unlimited bandwidth</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Encrypted connection</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Yes Traffic logs</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Works on all devices</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Connect anywhere</span>
                </li>
                <li>
                  <img className={css.good} src={good} alt="good" />
                  <span className={css.bold}>Get new features</span>
                </li>
              </ul>

              <h2 className={css.h2}>$12 / mo</h2>
              <button className={css.button}>Select</button>
            </div>
          </div>
        </div>
      </div>
      <div className={css.planBottom}>
      <div className={css.freeText}>
          <h2 className={css.h21}>Huge Global Network <br />of Fast VPN</h2>
          <p>
          See LaslesVPN everywhere to make it easier for you when you move <br />locations.
          </p>
        </div>
        <div className={css.imgs}>
        <img className={css.globe} src={global} alt="free" border="0" />
        <img className={css.sponsored} src={sponsored} alt="free" border="0" />

        </div>
        <div className={css.freeText}>
          <h2 className={css.h21}>Trusted by Thousands of <br /> Happy Customer</h2>
          <p>
          These are the stories of our customers who have joined us with great <br />
          pleasure when using this crazy feature.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Plan;
