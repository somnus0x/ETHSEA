import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-white py-2 border-b px-8 h-[86px]">
      <nav className="max-w-3xl mx-auto h-full">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="#about" className="text-sm font-medium">ABOUT</Link>
          </li>
          <li>
            <Link href="#intersections" className="text-sm font-medium">INTERSECTIONS</Link>
          </li>
          <li>
            <Link href="#ticket-info" className="text-sm font-medium">TICKET INFO</Link>
          </li>
          <li>
            <Link href="#speakers" className="text-sm font-medium">SPEAKERS</Link>
          </li>
          <li>
            <Link href="#faq" className="text-sm font-medium">F.A.Q</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header