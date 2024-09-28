import React from 'react'
import Link from 'next/link'

const headerMenuList = [
  {
    name: 'Intro',
    link: '#about',
  },
  {
    name: 'Speakers',
    link: '#what-to-expect',
  },
  {
    name: 'Tickets',
    link: '#ticket-info',
  },
  {
    name: 'Venue',
    link: '#speakers',
  },
  {
    name: 'FAQ',
    link: '#faq',
  },
  {
    name: 'Supporters',
    link: '#faq',
  },
]

const Header: React.FC = () => {
  return (
    <header className="flex fixed top-0 w-full z-50 justify-between md:px-12 bg-background">
      <img src="/images/logo.svg" />
      <nav className="">
        <ul className="h-full  flex justify-between items-center text-white">
          {headerMenuList.map((menu) => {
            return (
              <li className="md:mr-4 mr-1" key={menu.name}>
                <Link
                  href={menu.link}
                  className="border-b border-white text-sm md:text-lg font-normal"
                >
                  {menu.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
