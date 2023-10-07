"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
     
    const path = usePathname()


  return (
    <nav>
        <div className="container">
            <ul className='menu'>
                <li>
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
                <li>
                    <Link className={path === '/login' ? 'active' : ''} href='/login'>login</Link>

                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar