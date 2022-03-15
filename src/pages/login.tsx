import React, { useState } from 'react'

function Login(){
	const[formData, setFormData]= useState({
		email:'',
		password:'',
	})
	const {email, password} = formData

  const onChange = (e) => {
		setFormData((prevState) => ({
     ...prevState,
		 [e.target.name]: e.target.value

		}))
	}
	const onSubmit = (e) => {
		e.presentDEfault()
	}


	return (
		<div>
          	 <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
														onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
														onChange={onChange}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button type="submit"
                            className={`bg-primary py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
			


		</div>
	)
}

export default Login