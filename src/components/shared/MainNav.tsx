import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import type { FC, JSX } from 'react'
import Logout from './Logout'
import { isAuthenticated } from '../../utils/functions'

const MainNav: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="mt-0 mb-2 sm:mb-4 mx-auto p-2 sm:p-4 sm:border-b border-main-content-bg">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-text py-3">
          <NavLink to="/" className={({ isActive }) => `${isActive && 'font-bold'} text-text visited:text-text hover:text-text--hover transition-colors duration-200`} title='To Start Page'>Scribble!</NavLink>
        </div>
        <div className="flex items-center">
          {isAuthenticated() && <>
            <div className="hamburger block cursor-pointer" onClick={toggleMenu}>
              <div className="w-6 h-0.5 bg-white mx-0 my-1.5"></div>
              <div className="w-6 h-0.5 bg-white mx-0 my-1.5"></div>
              <div className="w-6 h-0.5 bg-white mx-0 my-1.5"></div>
            </div>
            <ul className={`${isOpen ? 'flex nav-open' : 'hidden nav-closed'} list-none flex-col absolute top-18 left-0 w-full bg-content-bg m-0 p-0 opacity-95 border border-main-content-bg`}>
              <NavLink to="/home" className={({ isActive }) => `${isActive && 'font-bold'} text-text visited:text-text hover:text-text--hover transition-colors duration-200`}>
                <li className="m-0 px-4 py-3 border border-t-0 border-main-content-bg">Home</li>
              </NavLink>
                <NavLink to="/articles" className={({ isActive }) => `${isActive && 'font-bold'} text-text visited:text-text hover:text-text--hover transition-colors duration-200`}>
                  <li className="m-0 px-4 py-3 border border-t-0 border-main-content-bg">My Articles</li>
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => `${isActive && 'font-bold'} text-text visited:text-text hover:text-text--hover transition-colors duration-200`}>
                  <li className="m-0 px-4 py-3 border border-t-0 border-main-content-bg">My Profile</li>
                </NavLink>
                <li className="flex flex-col items-end m-0 px-4 py-3 border border-t-0 border-main-content-bg"><Logout /></li>
            </ul>
            <ul className="hidden nav-large list-none">
              <li className="inline-block mx-1 my-2">
                <NavLink to="/home" className={({ isActive }) => `${isActive && 'font-bold'} text-text visited:text-text hover:text-text--hover transition-colors duration-200`}>Home</NavLink>
              </li>
              <li className="inline-block mx-1 my-2">
                <NavLink to="/articles" className={({ isActive }) => `${isActive && 'font-bold'} text-text visited:text-text hover:text-text--hover transition-colors duration-200`}>My Articles</NavLink>
              </li>
              <li className="inline-block mx-1 my-2">
                <NavLink to="/profile" className={({ isActive }) => `${isActive && 'font-bold'} text-text visited:text-text hover:text-text--hover transition-colors duration-200`}>My Profile</NavLink>
              </li>
              <li className="inline-block mx-1 mt-2 mb-3 ml-4">
                <Logout size="small" />
              </li>
            </ul>
          </>}
        </div>
      </div>
    </nav>
  )
}

export default MainNav
