import { useEffect, useState } from 'react'
import { Hero, Navbar, Sidebar } from './components'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = () => setShowSidebar(!showSidebar)

  const [isDarkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('DARK_MODE')) || true,
  )

  const toggleDarkMode = (checked) => {
    setDarkMode(checked)
  }
  useEffect(() => {
    const DARK_MODE = JSON.parse(localStorage.getItem('DARK_MODE'))
    console.log(DARK_MODE)
    const rootEl = document.documentElement
    if (isDarkMode) {
      if (!rootEl.classList.contains('dark')) {
        rootEl.className += 'dark'
        localStorage.setItem('DARK_MODE', true)
      }
    } else {
      rootEl.classList.remove('dark')
      localStorage.setItem('DARK_MODE', false)
    }
  }, [isDarkMode])
  return (
    <>
      <div
        className={`h-full min-h-screen dark:bg-gray-900 text-black dark:text-white relative overflow-hidden`}
      >
        <Navbar toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} />

        <Hero />
        <div className='bg-white dark:bg-gray-900 p-4 rounded-full shadow-2xl fixed md:right-16 md:bottom-14 right-5 bottom-5'>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </div>
      </div>
      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
    </>
  )
}

export default App
