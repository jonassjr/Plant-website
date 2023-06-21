import NavBar from './components/Navbar'
import styles from './styles'

function App() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <header className={styles.container}>
        <NavBar />
      </header>
    </div>
  )
}

export default App
