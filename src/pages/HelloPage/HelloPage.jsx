import React from 'react'
import css from './HelloPage.module.css'
import Banner from '../../components/Banner/Banner'

const HelloPage = () => {
  return (
      <div className={css.helloContainer}>
          {/* <h1>Welcome <br /> to Jasmine Studio</h1> */}
          {/* <div className={css.banner}>Banner</div> */}
          <Banner/>
      <div className={css.info}>
        <ul className={css.infoTiles}>
          <li className={css.tile}>
                <h2>Who we are</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium sunt quod veritatis! Unde at, necessitatibus aut quidem quam assumenda eos corporis, accusamus soluta vel quis inventore magnam laborum voluptatum itaque?</p>
          </li>
          <li className={css.tile}>
                <h2>Why Jasmine Studio?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li className={css.tile}>
                <h2>Our restaurants</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium sunt quod veritatis! Unde at, necessitatibus aut quidem quam assumenda eos corporis, accusamus soluta vel quis inventore magnam laborum voluptatum itaque?</p>
          </li>
          <li className={css.tile}>
            <h2>How to contact us</h2>
            <ul>
              <li><p>Contact 1</p></li>
              <li><p>Contact 2</p></li>
              <li><p>Contact 3</p></li>
              <li><p>Contact 4</p></li>
            </ul>
          </li>
          
        </ul>
      </div>

          
    </div>
  )
}

export default HelloPage