"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav
                className='bg-blue-900/80 md:bg-blue-900/50 fixed w-full top-0 left-0 right-0 z-10'>
                <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>

                    <div>
                        <div className='flex items-center justify-between py-3 md:py-5 md:block'>

                            {/* LOGO  */}
                            <Link href={'/'}>
                                <Image src={'/NavLogo.png'} height={80} width={80} alt="Navbar" />
                            </Link>

                            {/* HAMBURGER BUTTON FOR MENU   */}
                            <div className='md:hidden'>
                                <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400'
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <IoMdClose className='text-white h-6 w-6' />
                                    ) : (
                                        <GiHamburgerMenu className='text-white h-6 w-6' />
                                    )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0
${navbar ? 'p-12 md:p-0 block' : 'hidden'}
` }>
    <ul className='h-screen md:h-auto items-center justify-center md:flex'>
        <li className='pb-6 text-xl text-white py-2 md:px-6 
        text-center border-b-2 md:border-b-0 hover:underline'>
<Link href={'#about'} onClick={()=>setNavbar(!navbar)}>
    About
</Link>
        </li>
        <li className='pb-6 text-xl text-white py-2 md:px-6 
        text-center border-b-2 md:border-b-0 hover:underline'>
<Link href={'#blogs'} onClick={()=>setNavbar(!navbar)}>
    Blog
</Link>
        </li>
        <li className='pb-6 text-xl text-white py-2 md:px-6 
        text-center border-b-2 md:border-b-0 hover:underline'>
<Link href={'#contact'} onClick={()=>setNavbar(!navbar)}>
    Contact
</Link>
        </li>
        <li className='pb-6 text-xl text-white py-2 md:px-6 
        text-center border-b-2 md:border-b-0 hover:underline'>
<Link href={'#projects'} onClick={()=>setNavbar(!navbar)}>
    Projects
</Link>
        </li>
    </ul>

                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar