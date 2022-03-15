import type { NextPage } from "next";

import { useDispatch } from "react-redux";
import { RootState, useAppSelector } from "../redux/store";
import {actions as loginActions} from "../redux/modules/loginSlice"
import { useState } from "react";
import Image from "next/image";


const IndexPage: NextPage = (props:any) => {
	const [email,setEmail] =useState("");
	const [password,setPassword] = useState("");

 const dispatch= useDispatch();
 const login = useAppSelector((state: RootState)=> state.login)

	const {fetch} = loginActions


  return (
    <div>       
	
            {
			 <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                         <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
														value={email}
														onChange={(e)=> setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
														value={password} onChange={(e)=> setPassword(e.currentTarget.value)} 
														
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button onClick={() => dispatch(fetch({email: email, password: password}))}
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
						   
						  
            
            </div>
        </div>
			
			}  
			
			</div>
  );
};

export default IndexPage;
