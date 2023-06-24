import { useEffect, useState } from 'react'

import { CloseCircle, HambergerMenu } from 'iconsax-react'

import Logo from '../assets/Logo.svg'

import { NavLinks } from '../constants'
import styles from '../styles'

function NavBar() {
  const [toggle, setToggle] = useState(false)
  const [activeItem, setActiveItem] = useState('home')
  const [scrollActive, setScrollActive] = useState(false)

  const handleItemClick = (itemName) => {
    setActiveItem(itemName)
    setToggle(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollActive(true)
      } else {
        setScrollActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScrollMobile = () => {
      const windowHeight = window.innerHeight
      const sections = document.querySelectorAll('section')
      let activeSection = 'home'

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top

        if (sectionTop <= windowHeight / 2) {
          activeSection = section.id
        }
      })

      setActiveItem(activeSection)
    }

    window.addEventListener('scroll', handleScrollMobile)

    return () => {
      window.removeEventListener('scroll', handleScrollMobile)
    }
  }, [])

  return (
    <div
      className={`bg-white fixed w-full z-[50] ${
        scrollActive ? 'shadow-lg transition-all duration-1000' : 'transition-all duration-700'
      } `}
    >
      <nav
        className={`${styles.container}  flex justify-between items-center h-14 sm:h-16 ${
          scrollActive
            ? 'border-b-2 border-transparent'
            : 'border-b-2 border-third-color transition-all duration-700'
        }`}
      >
        <img src={Logo} alt="logo image" className="cursor-pointer w-[208px] h-[48px]" />
        <ul className="list-none sm:flex hidden gap-x-8">
          {NavLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => handleItemClick(nav.id)}
              className={`font-poppins font-medium text-[16px] text-primary 
            hover:text-secondary transition-all duration-300 ${
              activeItem === nav.id ? 'text-secondary' : ''
            }`}
            >
              <a href={`#${nav.id}`}>{nav.tittle}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end items-center">
          {toggle ? (
            <CloseCircle
              variant="Broken"
              className="text-primary"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <HambergerMenu
              variant="Broken"
              className="text-primary"
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
        </div>

        <div
          className={`${toggle ? 'flex' : 'hidden'} sm:hidden bg-white slide 
          fixed top-20 shadow-custom p-6 right-0 left-0 rounded-lg mx-6 z-50
        `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 ">
            {NavLinks.map((nav, i) => (
              <li
                key={nav.id}
                onClick={() => handleItemClick(nav.id)}
                className={`font-poppins font-semibold text-[14px] text-primary ${
                  i === NavLinks.length - 1 ? 'mb-0' : 'mb-4'
                } 
                hover:text-secondary transition-all duration-300 
                ${activeItem === nav.id ? 'text-secondary' : ''}`}
              >
                <a href={`#${nav.id}`}>{nav.tittle}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
