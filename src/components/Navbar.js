import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBook,
    faShop,
    faUserPen,
    faBars,
    faTimes,
  } from "@fortawesome/free-solid-svg-icons"

function SiteNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [selectedTab] = useState(window.location.pathname)
    return (
        <div className="flex h-14 items-center justify-start px-6 shadow-sm bg-gray-800 text-white relative z-30">
            <button className="flex-1 no-underline block h-4">
            </button>
            <div className="flex-none hidden md:flex md:justify-center md:h-full">
                <a
                    href="/"
                    className={"block h-full flex items-center mx-4 px-2 border-b-2 transition-colors duration-300 ease-in-out hover:text-blue-400 " + (selectedTab === '/books' ? 'border-primary-500' : 'border-transparent')}
                >
                    Home
                </a>
                <a
                    href="/properties"
                    className={"block h-full flex items-center mx-4 px-2 border-b-2 transition-colors duration-300 ease-in-out hover:text-blue-400 " + (selectedTab === '/bookshops' ? 'border-primary-500' : 'border-transparent')}
                >
                    Properties
                </a>
            </div>
            <div className="flex-1 items-center justify-end hidden md:flex">
            </div>
            <FontAwesomeIcon
                icon={mobileOpen ? faTimes : faBars}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-black text-3xl cursor-pointer md:hidden"
            />
            {mobileOpen && (
            <div className="bg-gray-800 text-white absolute top-full left-0 flex flex-col w-full py-8y shadow-sm lg:hidden">
                <div className="flex-1 flex flex-col items-center text-xl">
                <a
                    href="/"
                    className={"no-underline px-2 font-medium hover:text-blue-400"  
                    + (selectedTab === '/' ? 'border-b-2 border-primary-500' : '')}
                >
                    <FontAwesomeIcon icon={faBook} className="mr-3" /> Home
                </a>
                <a
                    href="/properties"
                    className={"no-underline px-2 py-3 my-2 font-medium hover:text-blue-400"
                    + (selectedTab === '/properties' ? 'border-b-2 border-primary-500' : '')}
                >
                    <FontAwesomeIcon icon={faShop} className="mr-3" /> Properties
                </a>
                
                </div>
            </div>
            )}
        </div>
    )
}

export default SiteNavbar