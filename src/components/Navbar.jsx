"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'



const Navbar = () => {
     
    const path = usePathname()

    console.log(path);

  return (
    <nav>
        <div className="container">
            <ul className='menu'>
                <li className={path === '/' ? 'active' : ''}>
                    <Link className={path === '/' ? 'active' : ''} href='/'>Home</Link>
                </li>
                <li>
                    <Link className={path === '/about' ? 'active' : ''} href='/about'>about</Link>
                </li>
                <li>
                    <Link className={path === '/service' ? 'active' : ''} href='/service'>service</Link>
                </li>
                <li>
                    <Link className={path === '/contact' ? 'active' : ''} href='/contact'>contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar