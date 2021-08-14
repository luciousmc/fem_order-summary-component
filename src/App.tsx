import React from 'react'
import Styles from './App.module.css';
import OrderSummary from './components/OrderSummary';

const dummyData = {
  description: 'You can now listen to milions of songs, audiobooks, and podcasts on any device anywhere you like!',
  price: 5999,
  planType: 'annual',
  headerImg: '/public/images/illustration-hero.svg',
}

function App(): JSX.Element {

  return (
    <div className={Styles.app}>
      <OrderSummary data={dummyData} />
    </div>
  )
}

export default App
