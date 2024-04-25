import React from 'react'

const Login = () => {
  return (
    <div className=''>
        <div className='absolute brightness-50'>
            <img
                className='size-auto'
                alt="background"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            />
        </div>
        <div className='absolute my-24 bg-black w-[30%] mx-auto left-0 right-0 bg-opacity-70'>
            <form className='flex flex-col py-12 px-8 text-white'>
                <h1 className='text-3xl font-bold ml-[10%] mb-5'>Sign In</h1>
                <input className='w-[80%] my-2 mx-auto py-3 px-2 rounded-md bg-transparent bg-opacity-80 border border-gray-500' type='text' placeholder='Email or mobile number'/>
                <input className='w-[80%] my-2 mx-auto py-3 px-2 rounded-md bg-transparent border border-gray-500' type='password' placeholder='Password'/>
                <button className='w-[80%] bg-red-700 my-3 py-1 mx-auto rounded-sm' >Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login