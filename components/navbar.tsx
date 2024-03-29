import { NextPage } from "next"
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from "next/router";



const NavbarPrelaunch:NextPage = () => {
    const [isMenuMobile, setMenuMobile] = useState(false);
    const router = useRouter();


    // change style based on boolean
    const menuWrapperClassName = isMenuMobile
        ? "flex flex-col md:flex-row mx-auto min-h-[100vh] md:min-h-0 md:ml-auto mt-8 md:mt-0 z-20 md:z-0 pl-8"
        : "hidden md:flex md:flex-row md:ml-auto mt-3 md:mt-0";

        
    return(
        <nav className="py-2 md:py-4">
            <div className="px-4 mx-auto md:flex md:items-center">

            <div className="flex justify-between items-center hover:cursor-pointer">
                <div onClick={()=>setMenuMobile(false)}>
                    {
                        (router.pathname != "/" || isMenuMobile)&&
                        <Link href="/">
                        <img src="/cbgLogo.png" className="w-10 h-auto"/>
                        </Link>
                    }
                    
                </div>
                <button id="nav-icon" onClick={()=>setMenuMobile(!isMenuMobile)} type="button" className={`md:hidden inline-flex ${isMenuMobile && "open"} items-center ml-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="mobile-menu" aria-expanded="false">
                <span className="bg-gray-500 dark:bg-gray-400"></span>
                <span className="bg-gray-500 dark:bg-gray-400"></span>
                <span className="bg-gray-500 dark:bg-gray-400"></span>
                </button>
            </div>
            <div id="menu" className={menuWrapperClassName} onClick={()=>setMenuMobile(false)}>
                <Link href="../labs"><span className={ `p-2 lg:px-4 md:mx-2 text-gray-400 text-3xl md:text-xl hover:cursor-pointer hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 ${router.pathname == "/labs" ? "font-bold" : ""} `}>Projects</span></Link>
                <Link href="../research"><span className={ `p-2 lg:px-4 md:mx-2 text-gray-400 text-3xl md:text-xl hover:cursor-pointer hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 ${router.pathname == "/research" ? "font-bold" : ""} `}>Research</span></Link>
                <Link href="../bounties"><span className={ `p-2 lg:px-4 md:mx-2 text-gray-400 text-3xl md:text-xl hover:cursor-pointer hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 ${router.pathname == "/bounties" ? "font-bold" : ""} `}>Bounties</span></Link>
                <Link href="../resources"><span className={`p-2 lg:px-4 md:mx-2 text-gray-400 text-3xl md:text-xl hover:cursor-pointer hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 ${router.pathname == "/resources" ? "font-bold" : ""} `}>Resources</span></Link>
                <a href="https://linktr.ee/cmublockchain" target="_blank" rel="noopener noreferrer" className="flex items-center"><span className={`p-2 lg:px-4 md:mx-2 text-gray-400 text-3xl md:text-xl hover:cursor-pointer hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 } `}>Contact</span></a>
                {/* show disconnect button if connected and vise versa */}
                <Link href="../members"><span className={`p-2 lg:px-4 md:mx-2 text-green-400 text-3xl md:text-lg md:text-center md:border md:border-solid md:border-gray-300 md:dark:border-gray-600 md:dark:hover:border-sky-200 rounded hover:bg-green-400 hover:cursor-pointer hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1`}>Members</span></Link>
            </div>
            </div>
        </nav>
    )
    
}

export default NavbarPrelaunch