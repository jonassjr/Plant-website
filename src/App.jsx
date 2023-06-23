import NavBar from './components/Navbar'
import Hero from './components/Hero'

import styles from './styles'
import AboutUs from './components/AboutUs'

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
      </div>
    </div>
  )
}

export default App
