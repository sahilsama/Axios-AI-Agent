"use client"
import { supabase } from '@/services/Supabase';
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { UserDetailContext } from './context/UserDetailContext';
import { User } from 'lucide-react';

const Provider = ({children}) => {

    const {user} = useUser();
     const {userDetail , setuserDetail}= useState();

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
        setuserDetail(data[0]);
        return ;
        
            
        }
        setuserDetail(Users[0]);

        

    }

  return (
      <UserDetailContext.Provider value={{userDetail, setuserDetail}}> 
      <div className='w-full'> {children} </div>
      </UserDetailContext.Provider>
  )
}

export default Provider
