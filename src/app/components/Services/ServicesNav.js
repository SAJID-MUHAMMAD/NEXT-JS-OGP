import React from 'react'
import Link from "next/link"

const ServicesNav = () => {
  return (
    <nav>
    <ul className="flex items-center  justify-center py-5 bg-slate-400 gap-5">
        <li>
            <Link href="/services/services1">services1</Link>
        </li>
          
        <li>
            <Link href="/services/services2">services2</Link>
        </li>
        <li>
            <Link href="/services/services3">services3</Link>
        </li>
    </ul>
</nav>
  )
}

export default ServicesNav