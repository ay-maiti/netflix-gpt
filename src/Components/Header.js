import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useRemoveUser from '../Utils/useRemoveUser'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom'
import { logo } from '../Utils/constants'

const Header = () => {
  let user_logged = useSelector((store)=>store.user.person)
  console.log("user_logged: ", user_logged);

  const navigate = useNavigate();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
              if (user) {
                console.log("firebase user", user)
                navigate('/browse');
             //   handleSignOut();
              } else {
                navigate('/login')
              }
              })
    return ()=>unsubscribe();
  }, [])

  const handleSignOut = useRemoveUser();
  return (
   
      <div className='absolute z-10 py-2 w-[100%] bg-gradient-to-b from-black flex justify-between'>
          <img className="w-[10%] ml-[12%]" alt='logo' src={logo}/>
          {user_logged && <div className='mr-[10%] flex mt-2'>    
            <img className="h-10  mr-6 rounded-sm" alt='user-pic' src= {user_logged.user_dp}/>
            <button className='bg-red-600 text-white px-4 py-2 h-10 rounded-full font-bold' onClick={handleSignOut}>Sign Out</button>
          </div>}
      </div>
      
  )
}

export default Header
