import React from 'react'
import css from './Subscribe.module.css'

function Subscribe() {
  return (
    <div className={css.sub}>

        <div className={css.left}>  
            <h1 className={css.h1}>Subscribe Now for <br/> Get Special Features!</h1>
            <p>Let's subscribe with us and find the fun.</p>
        </div>

        <div className={css.right}>  
            <button className={css.button}>Subscribe Now</button>
        </div>
    </div>
  )
}

export default Subscribe