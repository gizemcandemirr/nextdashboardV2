import { useDispatch } from "react-redux";
import { RootState, useAppSelector } from "../redux/store";
import {actions as loginActions} from "../redux/modules/loginSlice"
import { useState } from "react";

const login = (props:any) => {
    
   const [email,setEmail] =useState("");
   const [password,setPassword] = useState("");

  const dispatch= useDispatch();
  const login = useAppSelector((state: RootState)=> state.login)

   const {fetch} = loginActions

  return (
    <div>       
    { <div>
      <input className="border border-gray-600" name="email" value={email} onChange={(e)=> setEmail(e.currentTarget.value)} />
      <input className="border border-gray-600" name="password" value={password} onChange={(e)=> setPassword(e.currentTarget.value)} />
      <button onClick={() => dispatch(fetch({email: email, password: password}))}> login</button>
     </div>      
      } </div>
  )
}

export default login