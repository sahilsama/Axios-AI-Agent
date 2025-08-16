"use client"
import { supabase } from '@/services/Supabase';
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const Provider = ({children}) => {

    const {user} = useUser();

    useEffect( () => {
            user && CreateNewUser();
    }, [user])

    const CreateNewUser= async()=>{
        // if already exist user
        
        let { data: Users, error } = await supabase
        .from('Users')
        .select('*')
        .eq('email', user?.primaryEmailAddress.emailAddress)
        
        // array(0) in the console
        console.log("print data")
        console.log(Users);
        
        if(Users.length == 0){
            const { data } = await supabase
            .from('Users')
            .insert([
                { 
                    name : user?.fullName,
                    email : user?.primaryEmailAddress.emailAddress
                },
            ])
            .select();


        console.log(data)
        
            
        }

        

    }

  return (
    <div className='w-full'>
        {children}
      
    </div>
  )
}

export default Provider
