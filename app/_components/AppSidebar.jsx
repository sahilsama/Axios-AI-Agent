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
import { Search, Home, Compass, Library, LogIn } from 'lucide-react'
import { Button } from "@/components/ui/button" // Added missing Button import

const MenuOptions = [
    {
        title: 'Home',
        icon: Home,
        path: '/'
    },
    {
        title: 'Discover',
        icon: Compass,
        path: '/discover' // Changed to lowercase for consistency
    },
    {
        title: 'Library',
        icon: Library,
        path: '/library' // Changed to lowercase for consistency
    },
    {
        title: 'Sign In',
        icon: LogIn,
        path: '/sign-in' // Changed to kebab-case for better URL format
    },
]

const AppSidebar = () => {
    const path = usePathname();
    
    return (
        <Sidebar>
            <SidebarHeader className='bg-accent flex items-center justify-center py-5'>
                <Image 
                    src="/logo.png" 
                    alt="logo" 
                    width={200} 
                    height={100} 
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
                                    className={`py-6 px-6 hover:font-bold ${path === menu.path ? 'font-bold' : ''}`} // Changed to exact path match
                                >
                                    <a href={menu.path} className='flex items-center gap-4'>
                                        <menu.icon className="w-8 h-8" />
                                        <span className='text-xl'>{menu.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>

                    <Button className='rounded-full mx-5 mt-6'>Sign Up</Button>
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
                </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar