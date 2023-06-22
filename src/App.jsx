import NavBar from './components/Navbar'
import Hero from './components/Hero'

import styles from './styles'

function App() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <header className={styles.container}>
        <NavBar />
      </header>

      <div className={`${styles.container} ${styles.paddingY}`}>
        <Hero />
      </div>
    </div>
  )
}

export default App
