"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { User } from '@prisma/client';
import { logoutUser } from '@/actions/auth';
import { useRouter } from 'next/navigation';

const AnnoucementBar = () => {
    return(
        <div className='w-full bg-black py-2'>
            <div className='container mx-auto flex items-center justify-center px-8'>
                <span className='text-center text-sm font-medium tracking-wide text-white'>
                  FREE SHIPPING ON ORDERS OVER 500RS | FREE RETURNS
                </span>
            </div>
        </div>
    )
}

type HeaderProps ={
  user :Omit<User,"passwordHash"> | null;
  categorySelector?: React.ReactNode;
}

const Header = ({user,categorySelector}:HeaderProps) => {
  const router =useRouter()

  const [isOpen,setIsOpen] = useState<boolean>(true);
  const [prevScrollY,setPrevScrollY] =useState<number>(0);

  useEffect(() => {
    const handleScroll =()=>{
      const currentScrollY = window.scrollY;
      const scrolledUp =currentScrollY < prevScrollY;
      if (scrolledUp) {
        setIsOpen(true);
      } else if (currentScrollY > 100) {
        setIsOpen(false);
      }
      setPrevScrollY(currentScrollY);
    }
    
    setPrevScrollY(window.scrollY);

    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[prevScrollY])
  

  return (
    <header className='w-full sticky top-0 z-50'>
      <div 
      className={`w-full transform transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <AnnoucementBar/>
      <div className='text-black w-full flex justify-between items-center py-3 sm:py-4 bg-white/80 shadow-sm border-b border-gray-100 backdrop-blur-sm'>
        <div className='flex justify-between items-center container mx-auto px-8'>
          <div className='flex flex-1 justify-start items-center gap-4 sm:gap-6'>
              <button className='text-gray-700 hover:text-gray-950 md:hidden'>
              <GiHamburgerMenu className='h-5 w-5 sm:h-6 sm:w-6'/>
              </button>
              <nav className='hidden md:flex gap-4 lg:gap-6 text-sm font-medium'>
                {categorySelector}
                <Link href='#'>Sale</Link>
              </nav>
          </div>
          <Link href='#' className='absolute left-1/2 -translate-x-1/2'>
          <span className='text-lg sm:text-2xl font-bold tracking-tight'>
            DEAL
          </span>
          </Link>
          <div className='flex flex-1 justify-end items-center gap-2 sm:gap-4'>
            <button className='text-gray-700 hover:text-gray-950 hidden sm:block'>
            <CiSearch className='h-5 w-5 sm:h-6 sm:w-6'/>
            </button>
            
            {user ? (
                <div className='flex items-center gap-2 sm:gap-2'>
                  <span className='text-xs sm:text-sm text-gray-700 hidden md:block hover:underline'>
                    {user.email}
                  </span>
                  <Link href='#'
                  className='text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:border-gray-950 '
                  onClick={async(e)=>{
                    e.preventDefault();
                    await logoutUser();
                    router.refresh();
                  }}
                  >
                    Sign Out
                  </Link>
                </div>
            ):(
                <React.Fragment>
                  <Link href='/auth/sign-in'  className='text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950'>
                  Sign In</Link>
                  <Link href='/auth/sign-up'  className='text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950'>
                  Sign Up</Link>
                </React.Fragment>
            )}

            <button className='text-gray-700 hover:text-gray-950 relative'>
            <BsBagCheck className='h-5 w-5 sm:h-6 sm:w-6'/>
            <span className='absolute -top-1 -right-1 bg-black text-white text-[10px] 
                            sm:text-xs w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center'>
             0
            </span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
