'use client'

import React, { useState, useRef, useEffect } from 'react'
import logo from '@/app/Images/icon.png'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [profileOpen, setProfileOpen] = useState(false)
    const profileRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setProfileOpen(false)
            }
        }
        if (profileOpen) document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [profileOpen])

    return (
        <>
            <div className="navbarContainer flex justify-between items-center p-6 w-full border-b-1 border-[#c99090]">
                <div className="forAlignment  flex items-center gap-2   ">

                    <h1 className="font-cario-heading ml-2 text-4xl text-gray-900 whitespace-nowrap">Cario</h1>
                </div>


                <div className="navLinks flex items-center gap-6">
                    <Link href="/app" className="navLink">Home</Link>
                    <Link href="/about" className="navLink">About</Link>
                 
                    <Link href="/process" className="navLink">How Its Works?</Link>
                    <Link href="/contact" className="navLink">Contact</Link>
                    <Link href="/booking" className="bg-[#922b2b] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#7a2323] transition-all shadow-lg shadow-[#922b2b]/20 text-sm">Book Now</Link>
                    <Link href="/favorites" className="navLink flex items-center gap-1.5">Favorites</Link>
                    <Link href="/my-bookings" className="navLink flex items-center gap-1.5" title="My Bookings">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        My Bookings
                    </Link>
                    {/* <div className="profile-dropdown-wrap relative" ref={profileRef}>
                        <button
                            type="button"
                            onClick={() => setProfileOpen((o) => !o)}
                            className="profile-trigger p-1 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Profile menu"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                        <div className={`profileDialog ${profileOpen ? 'profileDialog--open' : ''}`}>
                            <Link href="/profile" onClick={() => setProfileOpen(false)}>Profile</Link>
                            <Link href="/settings" onClick={() => setProfileOpen(false)}>Settings</Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Navbar