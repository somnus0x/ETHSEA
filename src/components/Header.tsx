import React, { useState } from 'react'

const headerMenuList = [
  {
    name: 'Intro',
    link: '#about',
  },
  {
    name: 'Tickets',
    link: '#ticket-info',
  },
  {
    name: 'Speakers',
    link: '#speakers',
  },
  {
    name: 'Venue',
    link: '#venue',
  },
  {
    name: 'FAQ',
    link: '#faq',
  },
  {
    name: 'Supporters',
    link: '#supporters',
  },
]

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <nav className="bg-transparent  border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/images/logo.svg" alt="Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setVisible(!visible)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {visible && (
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium bg-white md:bg-transparent flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              {headerMenuList.map((menu, index) => {
                return (
                  <li key={index}>
                    <a
                      href={menu.link}
                      className="block py-2 px-3  md:text-white underline-none md:underline  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      {menu.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        <div className="hidden md:block md:block md:w-auto" id="navbar-default">
          <ul className="font-medium bg-white md:bg-transparent flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {headerMenuList.map((menu, index) => {
              return (
                <li key={index}>
                  <a
                    href={menu.link}
                    className="block py-2 px-3  md:text-white underline-none md:underline  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    {menu.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
