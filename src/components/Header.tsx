import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-background-secondary py-2  px-8 h-[62px]  mx-8 rounded-[30px]">
      <nav className="h-full w-[600px] mx-auto">
        <ul className="h-full  flex justify-between items-center text-background">
          <li>
            <Link href="#about" className="text-sm font-medium">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#intersections" className="text-sm font-medium">
              INTERSECTIONS
            </Link>
          </li>
          <li>
            <Link href="#ticket-info" className="text-sm font-medium">
              TICKET INFO
            </Link>
          </li>
          <li>
            <Link href="#speakers" className="text-sm font-medium">
              SPEAKERS
            </Link>
          </li>
          <li>
            <Link href="#faq" className="text-sm font-medium">
              F.A.Q
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
