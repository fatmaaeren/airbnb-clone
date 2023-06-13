import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className='px-16 py-4  flex flex-col min-h-screen'>
            <Header />
            <Outlet />
        </div>

    )
}

export default Layout