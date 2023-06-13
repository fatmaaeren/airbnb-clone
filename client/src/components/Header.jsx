import React, { useContext } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Header() {

    const {user} = useContext(UserContext)

    return (
        <header className='py-4 flex justify-between border-b-2'>
            <Link to={'/'} className='logo' >
                <img src={logo} alt="airbnb" width="120" height="50" />
            </Link>
            <div className='flex gap-8 border border-grey-300 rounded-full py-2 px-4 shadow-md shadow-gray-200 font-medium text-sm text-gray-500'>
                <div className='self-center'>Anywhere</div>
                <div className='border-l border-gray-300' ></div>
                <div className='self-center'>Any week </div>
                <div className='border-l border-gray-300' ></div>
                <div className='self-center'>Any quests</div>
                <button className='bg-primary text-white p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>

            <Link to={user? '/account' : '/login'} className='flex gap-3 border border-grey-300 rounded-full px-4 font-medium items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <div className='bg-gray-400 text-white p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>

                {!!user && (
                    <div className='text-gray-600'>
                        {user.name}
                    </div>
                )}

            </Link>
        </header>
    )
}

export default Header