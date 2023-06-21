import { useState } from 'react'

import { CloseCircle, HambergerMenu } from 'iconsax-react'

import Logo from '../assets/Logo.svg'

import { NavLinks } from '../constants'

function NavBar() {
  const [toggle, setToggle] = useState(false)
  const [activeItem, setActiveItem] = useState('home')

  const handleClick = (itemName) => {
    setActive(itemName)
  }

  return (
    <nav className="flex justify-between items-center h-14 sm:h-16 border-b-2 border-third-color">
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
            <a href={nav.id}>{nav.tittle}</a>
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
          fixed top-20 shadow-custom p-6 right-0 left-0 rounded-lg mx-6 
        `}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1 ">
          {NavLinks.map((nav, i) => (
            <li
              key={nav.id}
              className={`font-poppins font-semibold text-[14px] text-primary ${
                i === NavLinks.length - 1 ? 'mb-0' : 'mb-4'
              } 
                hover:text-secondary transition-all duration-300 
                ${activeItem === nav.id ? 'text-secondary' : ''}`}
            >
              <a href={nav.id}>{nav.tittle}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
