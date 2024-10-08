import {Navbar,Hero,Billing,Business,CardDeal,Client,Cta,Stats,Testomonial,Footer} from './components'
import styles from './style'
import './index.css'

const App = () => {
  return (
    <div className=' bg-primary w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className= {`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testomonial/>
          <Client/>
          <Cta/>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default App
