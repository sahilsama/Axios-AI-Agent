"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Compass, Library, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'

const MenuOptions = [
    {
        title: 'Home',
        icon: Home,
        path: '/'
    },
    {
        title: 'Discover',
        icon: Compass,
        path: '/discover'
    },
    {
        title: 'Library',
        icon: Library,
        path: '/library'
    },
]

const AppSidebar = () => {
    const path = usePathname();
    const { user } = useUser();
    
    return (
        <Sidebar>
            <SidebarHeader className='bg-accent flex items-center justify-center py-5'>
                <Image 
                    src="/OIP-removebg-preview.png" 
                    alt="logo" 
                    height={100} 
                    width={100} 
                    className="object-contain" 
                    priority 
                />
            </SidebarHeader>
            <SidebarContent className='bg-accent'>
                <SidebarGroup>
                    <SidebarMenu>
                        {MenuOptions.map((menu, index) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton 
                                    asChild 
                                    className={`py-6 px-6 hover:font-bold ${path === menu.path ? 'font-bold' : ''}`}
                                >
                                    <a href={menu.path} className='flex items-center gap-4'>
                                        <menu.icon className="w-8 h-8" />
                                        <span className='text-xl'>{menu.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>

                    {!user ? (
                        <SignUpButton mode='modal'>
                            <Button className='rounded-full mx-5 mt-6'>Sign Up</Button>
                        </SignUpButton>
                    ) : (
                        <SignOutButton>
                            <Button className='rounded-full mx-5 mt-6'>
                                Log Out
                                <LogOut className="ml-2 w-4 h-4" />
                            </Button>
                        </SignOutButton>
                    )}
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className='bg-gradient-to-b from-[#F4F2EA] to-[#D2D1CB] border border-black'>
                    <div>
                        <h2 className='text-gray-800'>Try Pro</h2>
                        <p className='text-gray-500'> Upgrade for image upload, smarter AI, and more copilot</p>
                        <button variant={'ghost'} className={'flex items-center mx-[-5px] mt-[10px] border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-all'}>
                            Learn more 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                            
                        </button>
                    </div>
                    {/* {profile} */}
                    <div className=" mt-auto bg-beige  flex justify-center py-4 border-t border-black">
                            <UserButton />
                    </div>

                </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar