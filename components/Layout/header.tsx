"use client"
import Link from 'next/link';
import React,{useState} from 'react'
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
//import Bullauge from "@/public/Assets/Img/Assets/Svg/Bulleye.svg"

const Header = () => {
  

  return (
    <header className="bg-red-900 lg:bg-[url('/Assets/Svg/Wood3.svg')] lg:bg-cover lg:bg-center lg:bg-no-repeat sticky top-0 z-50 shadow-md">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative text-[#FFF44F] flex items-center justify-between">
        <Link href={'/'} className="inline-flex items-center">
          <div className="relative top-[3vh] right-72 h-10 w-10 lg:h-36 lg:w-36">
            <Image src="/Assets/Img/LogoNeu.png" alt="Rettungsanker Logo" width={160} height={120} />
          </div>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 hover:text-white transition-all duration-300 uppercase">
          
          </span>
        </Link>
          <ul className=" justify-start items-center hidden lg:flex lg:gap-x-1 lg:justify-center">
            <li>
              <div className="hover:scale-110 transition-transform duration-300 hover:bg-amber-500/50 rounded-lg flex justify-center items-center gap-x-1">
                <Image src={"Assets/Svg/Bulleye.svg"} alt="Bulleye" width={10} height={10} sizes="100vw" className="w-0 h-0 lg:w-12 lg:h-12"/>
            
              <Link
                href="/"
                className="rounded-xl px-1 py-1 font medium w-32 font-bowlby uppercase  tracking-wide text-gray-100 transition-colors duration-300"
              >
                home
              </Link>
              </div>
            </li>
            <li>
              <div className="hover:scale-110 transition-transform duration-300 hover:bg-amber-500/50 rounded-lg flex justify-center items-center gap-x-0">
                <Image src={"Assets/Svg/Bulleye.svg"} alt="Bulleye" width={10} height={10} sizes="100vw" className="w-0 h-0 lg:w-12 lg:h-12"/>
            
              <Link
                href="/blogs"
                className="rounded-xl px-1 py-1 font medium w-32 font-bowlby uppercase  tracking-wide text-gray-100 transition-colors duration-300"
              >
                blog
              </Link>
              </div>
            </li>
            <li>
              <div className="hover:scale-110 transition-transform duration-300 hover:bg-amber-500/50 rounded-lg flex justify-center items-center gap-x-1">
                <Image src={"Assets/Svg/Bulleye.svg"} alt="Bulleye" width={10} height={10} sizes="100vw" className="w-0 h-0 lg:w-12 lg:h-12"/>
            
              <Link
                href="/account"
                className="rounded-xl px-1 py-1 font medium w-48 font-bowlby uppercase  tracking-wide text-gray-100 transition-colors duration-300"
              >
                Mein Konto
              </Link>
              </div>
            </li>
             <li>
              <div className="hover:scale-110 transition-transform duration-300 hover:bg-amber-500/50 rounded-lg flex justify-center items-center gap-x-1">
                <Image src={"Assets/Svg/Bulleye.svg"} alt="Bulleye" width={10} height={10} sizes="100vw" className="w-0 h-0 lg:w-12 lg:h-12"/>
            
              <Link
                href=""
                className="rounded-xl px-1 py-1 font medium w-48 font-bowlby uppercase  tracking-wide text-gray-100 transition-colors duration-300"
              >
                über uns
              </Link>
              </div>
            </li>
               <li>
              <div className="hover:scale-110 transition-transform duration-300 hover:bg-amber-500/50 rounded-lg flex justify-center items-center gap-x-1">
                <Image src={"Assets/Svg/Bulleye.svg"} alt="Bulleye" width={10} height={10} sizes="100vw" className="w-0 h-0 lg:w-12 lg:h-12"/>
            
              <Link
                href="/sportarena"
                className="rounded-xl px-1 py-1 font medium w-48 font-bowlby uppercase  tracking-wide text-gray-100 transition-colors duration-300"
              >
                sportarena
              </Link>
              </div>
            </li>

            <li>
              <div className="hover:scale-110 transition-transform duration-300 hover:bg-amber-500/50 rounded-lg flex justify-center items-center gap-x-1">
                <Image src={"Assets/Svg/Bulleye.svg"} alt="Bulleye" width={10} height={10} sizes="100vw" className="w-0 h-0 lg:w-12 lg:h-12"/>
            
              <Link
                href="/wohin"
                className="rounded-xl px-1 py-1 font medium w-32 font-bowlby uppercase  tracking-wide text-gray-100 transition-colors duration-300"
              >
                wohin?
              </Link>
              </div>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-6 lg:flex">
           
            <div className={"ml-24"}>
              <UserButton /> 
            </div>
            <Link href="/new">
            <button type="button" className="px-8 py-3 font-semibold inline-flex items-center gap-2 rounded-full bg-gray-100 text-black">
                <span>
                    Create
                </span> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
            </Link>
          </ul>
          <div className="lg:hidden">
            <div className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
              <UserButton />
            </div>
              
            
           
            <div className="fixed lg:hidden bottom-0 left-0 z-50 rounded-tl-2xl rounded-tr-2xl w-full border-t b bg-gray-900 border-gray-800">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium ">
                  <Link href="/">
                  <button type="button" className="inline-flex flex-col items-center justify-center px-5 py-2 hover:bg-gray-800 group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-2 text-gray-400 group-hover:text-[#FFF44F]">
                          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>

                        <span className="text-sm text-gray-400 group-hover:text-[#FFF44F]">Home</span>
                    </button>
                  </Link>
                    <Link href="/blogs">
                      <button type="button" className="inline-flex flex-col items-center justify-center px-5 py-2 hover:bg-gray-800 group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-2 text-gray-400 group-hover:text-[#FFF44F]">
                            <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clipRule="evenodd" />
                            <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                          </svg>
                          <span className="text-sm text-gray-400 group-hover:text-[#FFF44F]">Blogs</span>
                      </button>
                    </Link>
                    <Link
                    href="/new"
                    >
                      <button type="button" className="inline-flex flex-col items-center justify-center px-5 py-2 hover:bg-gray-800 group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-2 text-gray-400 group-hover:text-[#FFF44F]">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                          </svg>

                          <span className="text-sm text-gray-400 group-hover:text-[#FFF44F]">Create</span>
                      </button>
                    </Link>

                    <Link
                      href="/account">
                        <button type="button" className="inline-flex flex-col items-center justify-center px-5 py-2 hover:bg-gray-800 group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-2  text-gray-400 group-hover:text-[#FFF44F]">
                              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                            </svg>

                            <span className="text-sm text-gray-400 group-hover:text-[#FFF44F]">Profile</span>
                        </button>
                     </Link>
                </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header