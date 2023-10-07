// "use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import './dashboard.css'

const Navbar = () => {
    // const path = usePathname()
  return (
    <nav>
        <div className="container">
            <ul className='menu'>
                <li>
                    {/* <Link className={path === '/' ? 'active' : ''} href='/'>Back to Home</Link> */}
                    <Link href='/'>Back to Home</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar