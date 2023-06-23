import NavBar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Guide from './components/Guide'

import styles from './styles'
function App() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <header>
        <NavBar />
      </header>

      <div className={`${styles.container} ${styles.paddingY}`}>
        <Hero />
      </div>

      <div className={`${styles.container} ${styles.paddingY}`}>
        <AboutUs />
        <Guide />
      </div>
    </div>
  )
}

export default App
