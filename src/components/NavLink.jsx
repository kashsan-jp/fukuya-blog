"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({label, href}) {

    const pathname = usePathname();

  return (
    <Link 
        className={`nav-link ${
        pathname === href ? 'nav-link-active' : ''}`} 
        href={href}
    >
        {label}
    </Link>
  )
}
