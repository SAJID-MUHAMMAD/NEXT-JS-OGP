import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-8 bg-slate-300'>
        <div className='container'>
        <ul className='flex items-center justify-center gap-5 '>
            <li>
                <Link href="/">Home</Link>
             </li>
            <li>
                <Link href="/about">About</Link>
             </li>
            <li>
                <Link href="/">Contact</Link>
             </li>
            <li>
                <Link href="/services">Services</Link>
             </li>
            <li>
                <Link href="/blog">Blog</Link>
             </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar