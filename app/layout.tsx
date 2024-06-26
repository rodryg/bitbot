'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {  Navbar, DarkThemeToggle, Flowbite, Badge } from 'flowbite-react'
// import RouteGuard from './route-guard'

const inter = Inter({ subsets: ['latin'] })

/*export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' dark:text-white'}>
        <Flowbite theme={{ dark: true }}>
          <Navbar>
            <Navbar.Collapse>
              <Navbar.Link href="/">
                <Badge color="info">
                  BitBot
                </Badge>
              </Navbar.Link>
              <Navbar.Link href="/">
                Inicio
              </Navbar.Link>
              <Navbar.Link href="/monedas">
                Monedas
              </Navbar.Link>
              <Navbar.Link href="/cuenta">
                Cuenta
              </Navbar.Link>
            </Navbar.Collapse>
            <Navbar.Toggle></Navbar.Toggle>
            <DarkThemeToggle />
          </Navbar>
          <div className='flex dark:bg-gray-900'>
            <main className='min-h-screen mx-4 mt-4 mb-24'>
              {children}
            </main>
          </div>
        </Flowbite>
      </body>
    </html>
  )
}
