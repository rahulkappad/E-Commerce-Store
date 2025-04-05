"use client"

import React, { useActionState } from 'react'
import Form from 'next/form';

const initialState ={
  message:'',
}

type SignUpProps = {
  action:(prevState:any,formData:FormData) => Promise<{message:string} | undefined>
}

const SignUp = ({action}:SignUpProps) => {
  const [state,formAction,isPending]=useActionState(action,initialState);
  return (
    <Form action={formAction} className='max-w-md mx-auto my-16 p-6 bg-white rounded shadow-md'>
      <h1 className='text-2xl font-bold text-center mb-2'>
        Join the DEAL Revolution!
      </h1>
      <p className='text-center text-sm text-rose-600 font-semibold mb-4'>
      🔥 Limited Time Offer 🔥
      </p>
      <p className='text-center text-sm text-gray-600 mb-4'>
      Sign up now and get 50% OFF your first order!
      </p>
      {/* Email */}
      <div className='space-y-6'>
          <div className='space-y-2'>
            <label htmlFor="email" className='block text-sm font-medium test-gray-700'>
              Email address</label>
            <input 
            type="email"
            id='email'
            name='email' 
            autoComplete='email'
            required
            className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
            placeholder='Enter Your Email'
            />
          </div>
        {/* Password */}
          <div className=''>
            
          </div>
        {/* Copy */}
          <div className=''>

          </div>
        {/* Submit */}
          <button>

          </button>
      </div>
    </Form>
  )
}

export default SignUp
