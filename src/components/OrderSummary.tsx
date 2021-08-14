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
          alt="" />
      </div>    

      <div className={Styles.orderSummary__body}>
        <h2 className={Styles.orderSummary__body_title}>{title || 'Order Summary'}</h2>

        <p>{description}</p>
      </div>  
    </div>
  )
}

export default OrderSummary
