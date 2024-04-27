import React, { useRef, useState } from 'react'
import { checkEmail, checkPassword } from '../Utils/formValidation';

const Login = () => {
    const [signUp, setSignUp] = useState(false);
    const [showNameError, setShowNameError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const toggleSignUp = ()=>{
        setSignUp(!signUp);
    }
    const heading = signUp?"Sign Up":"Sign In"
    const toggleText1 = signUp?"Already have an account?":"New to Netflix?"
    const toggleText2 = signUp?"Sign in now.":"Sign up now."
    
    
  return (
    <div className=''>
        <div className='absolute brightness-50'>
            <img
                className='w-[2121px] h-[1193px]'
                alt="background"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            />
        </div>
        <div className='absolute my-24 bg-black w-[450px] mx-auto left-0 right-0 bg-opacity-70 min-w-[25%]'>
            <form onSubmit={(e)=>(e.preventDefault())} className='flex flex-col py-12 px-8 text-white'>
                <h1 className='text-3xl font-bold ml-[10%] mb-5'>{heading}</h1>
                {signUp && <input ref={name} onBlur={()=>{setShowNameError(!checkPassword(name.current.value))}} className='w-[80%] my-2 mx-auto py-3 px-2 rounded-md bg-transparent bg-opacity-80 border border-gray-500' type='text' placeholder='Name'/>}
                {showNameError && <p className='mx-[10%] text-red-700 text-sm mb-2'>❌ Your name must contain between 4 and 60 characters.</p>}
                <input ref={email} onBlur={()=>{setShowEmailError(!checkEmail(email.current.value))}} className='w-[80%] my-2 mx-auto py-3 px-2 rounded-md bg-transparent bg-opacity-80 border border-gray-500' type='text' placeholder='Email or mobile number'/>
                {showEmailError && <p className='mx-[10%] text-red-700 text-sm mb-2'>❌ Please enter a valid email address or phone number.</p>}
                <input ref={password} onBlur={()=>{setShowPasswordError(!checkPassword(password.current.value))}} className='w-[80%] my-2 mx-auto py-3 px-2 rounded-md bg-transparent border border-gray-500' type='password' placeholder='Password'/>
                {showPasswordError && <p className='mx-[10%] text-red-700 text-sm mb-2'>❌ Your password must contain between 4 and 60 characters.</p>}
                <button className='w-[80%] bg-red-700 my-3 py-1 mx-auto rounded-sm' >{heading}</button>
                <p className='ml-[10%]'>{toggleText1}  <b className='cursor-pointer' onClick={toggleSignUp}>{toggleText2}</b></p>
            </form>
        </div>
    </div>
  )
}

export default Login