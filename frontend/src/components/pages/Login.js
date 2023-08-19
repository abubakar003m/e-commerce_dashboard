import React ,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import BASE_URL from '../api/api';
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
           navigate('/')
        }
        })
    //Function to control Login button    
    const handleLogin= async ()=>{
        console.log(email,password)
        let result=await fetch(`${BASE_URL}/login`,{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            },
    
        });
        result=await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/')
        }
        else{
            alert("Please Enter correct details")
        }
    }
  return (
    <div className='login'>
         <h1>Login</h1>
      <center>  <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='inputBox' placeholder='Enter Email'/>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='inputBox' placeholder='Enter Password'/></center>
        <button className='signup' onClick={handleLogin} type='button'>Login</button>
    </div>
  )
}
export default Login
