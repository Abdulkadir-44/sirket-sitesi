'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Hizmetler', href: '/hizmetler' },
        { name: 'Projeler', href: '/projeler' },
        { name: 'Blog', href: '/blog' },
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'İletişim', href: '/iletisim' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md'
                : 'bg-white dark:bg-gray-900'
                }`}
        >
            <div className="w-full px-6">
                <nav className="max-w-7xl mx-auto flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="text-2xl font-heading font-bold">
                                <span className="text-blue-600 dark:text-orange-500">Neba</span>
                                <span className="text-gray-900 dark:text-white">Company</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative font-medium text-blue-600 dark:text-gray-200 transition-colors duration-300 hover:text-blue-800 dark:hover:text-orange-400
                           after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-orange-400 
                           after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle & CTA Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <ThemeToggle />
                        <Link
                            href="/iletisim"
                            className="bg-blue-600 text-white px-5 py-1 rounded-lg font-semibold
                         hover:bg-blue-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors duration-300"
                        >
                            Teklif Al
                        </Link>
                    </div>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-blue-600 dark:text-orange-400 p-2"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-2 bg-white dark:bg-gray-900 rounded-md shadow-md p-4 space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-blue-600 dark:text-gray-200 hover:text-blue-800 dark:hover:text-orange-400 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/iletisim"
                            className="block text-center bg-blue-600 dark:bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-orange-600 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Teklif Al
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}