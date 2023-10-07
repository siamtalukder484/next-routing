"use client"
import React, { useState } from 'react'
import "./login.css"

const Login = () => {
    let [showPass, setShowPass] = useState(false);
    let [FormData, setFormData] = useState({
        email: "",
        password: "",
    })
    let [error, setError] = useState({
        email: "",
        password: "",
    })

    let handleForm = (e) => {
        let {name, value} = e.target
        setFormData({...FormData, [name]:value})
        setError({})
    }

    let handleSubmit = () => {
        let expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!FormData.email){
            setError({...error, email: "Please Enter your email"})
        }
        else if(!expression.test(FormData.email)){
            setError({...error, email: "Please Enter a valid email address"})
            
        }
        else if(!FormData.password){
            setError({...error, password: "Please Enter your password"})
        }
        else if(FormData.password.length > 20){
            setError({...error, password: "Password Max Length is 20"})
        }
        else{
            console.log("Sob thik acea");
        }
    }

  return (
    <>
        <div className='form'>
            
            <div className='input_group'>
                <input className='input_box' onChange={handleForm} name='email' type='email' placeholder='Enter your Email'/>
                {error.email &&
                    <p className='error'>{error.email}</p>
                }
            </div>
            <div className='input_group'>
                <input className='input_box' onChange={handleForm} name='password' type={showPass ? "text" : "password"} placeholder='Enter your Password'/>
                {error.password &&
                    <p className='error'>{error.password}</p>
                }
                <div className='show_pass' >
                    <input onClick={() => setShowPass(!showPass)} type='checkbox' id='show'/>
                    <label for="show">Show Password</label>
                </div>
            </div>
            <div className='input_group'>
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </>
  )
}

export default Login