import React from 'react'
import { useSelector } from 'react-redux'
import useRemoveUser from '../Utils/useRemoveUser'

const Header = () => {
  let user = useSelector((store)=>store.user.user)
  console.log("user: ", user);

  const handleSignOut = useRemoveUser();
  return (
   
      <div className='absolute z-10 py-2 w-[100%] bg-gradient-to-b from-black flex justify-between'>
          <img className="w-[10%] ml-[12%]" alt='logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>
          {user && <div className='mr-[10%] flex mt-2'>    
            <img className="h-10  mr-6 rounded-sm" alt='user-pic' src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp" />
            <button className='bg-red-600 text-white px-4 py-2 h-10 rounded-full font-bold' onClick={handleSignOut}>Sign Out</button>
          </div>}
      </div>
      
  )
}

export default Header
