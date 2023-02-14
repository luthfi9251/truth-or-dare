import styles from './App.module.css'

import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'

import animationData from './assets/lottiePlaying.json'

function App() {
  let navigate = useNavigate()

  let handlePlay = () => {
    navigate("/play")
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <span className={styles.header}>Truth</span>
        <span className={styles.header2}>or</span>
        <span className={styles.header}>Dare</span>
      </div>
      <p>Buat temanmu sengsara!</p>
      <div className={styles.lottieWrapper}>
        <Lottie animationData={animationData}/>
      </div>
      <button onClick={handlePlay} className={styles.button}>Main</button>
    </div>
  )
}

export default App
