import NavBar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Guide from './components/Guide'

import Products from './components/Products'
import FAQs from './components/FAQs'
import styles from './styles'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

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
        <Products />
        <FAQs />
        <ContactUs />
      </div>

      <div className="bg-secondary">
        <Footer />
      </div>
    </div>
  )
}

export default App
