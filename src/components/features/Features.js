import React from 'react'
import css from './Features.module.css'
import illustration from '../../assets/Illustration 2.svg'
import good from '../../assets/Group 1120.png'

function Features() {
  return (
    <div className={css.featureContainer}>
        <div className={css.left}>
<img className={css.illu} src={illustration} alt="feature" border="0" />
            </div>

            <div className={css.right}>
                <h2 className={css.h2}>We Provide Many <br /> Features You Can Use</h2>
                <p className={css.fP}>You can explore the features that we provide with fun and <br /> have their own functions each feature.</p>
                <ul className={css.fList}>
                    <li><img className={css.good} src={good} alt="good" /><span className={css.bold}>Powerfull online protection.</span></li>
                    <li><img className={css.good} src={good} alt="good" /><span className={css.bold}>Internet without borders.</span></li>
                    <li><img className={css.good} src={good} alt="good" /><span className={css.bold}>Supercharged VPN.</span></li>
                    <li><img className={css.good} src={good} alt="good" /><span className={css.bold}>No specific time limits.</span></li>
                </ul>
                </div>

    </div>
  )
}

export default Features