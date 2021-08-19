import React from 'react'
import Styles from './OrderSummary.module.css'

interface Props {
  data: {
    headerImg: string;
    description: string;
    price: number;
    planType: string;
    title?: string;
  }
}

function OrderSummary({data: {headerImg, description, price, planType, title }}: Props): JSX.Element {
  return (
    <div className={Styles.orderSummary}>
      <div className={Styles.orderSummary__head}>
        <img
          className={Styles.orderSummary__head_img}
          src={headerImg}
          alt="Header image" />
      </div>

      <div className={Styles.orderSummary__body}>
        <h2 className={Styles.orderSummary__body_title}>
          {title || 'Order Summary'}
        </h2>

        <p className={Styles.orderSummary__body_description}>
          {description}
        </p>

        <div className={Styles.orderSummary__body_orderDetails}>
          <div>
            <div>
              {/* plant image */}
              <img src="/public/images/icon-music.svg" alt="Music Icon" />
            </div>
            <div className={Styles.orderSummary__body_orderDetails_plan}>
              {/* plan deets */}
              <h3>{planType} Plan</h3>
              <p>${(price / 100).toFixed(2)}</p>
            </div>
          </div>

          <div>
            {/* change plan */}
            <p>
              <a href="/">Change</a>
            </p>
          </div>
        </div>

        <button className={Styles.orderSummary__body_button}>
          Proceed to Payment
        </button>
      
        <p className={Styles.orderSummary__body_cancel}>Cancel Order</p>
      </div>
    </div>  
  )
}

export default OrderSummary
