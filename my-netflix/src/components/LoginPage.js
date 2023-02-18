import React, { useState } from 'react'
import './LoginPage.css'
import { logInApiCall } from '../ApiCalls'


const LoginPage = () => {
    const [details , setDetails] = useState({
        email : "",
        password : ""
    })

    const handleChange = (key,value) => {
        setDetails({
            ...details,
            [key] : value
        })
    }

    const handleLogin = () => {
        // console.log(details)

        logInApiCall({
            email : details.email,
            password : details.password
        })
        .then((response) => {
            console.log(response)
            window.location.href = "/admin"
        }).catch((error) => {
            console.log(error)
        })
    }
  return (
      <div className='containerStyle'>

          <div style={{backgroundColor : "white"}} className='formStyle'>
              <div className='containerStyle'>
                  <label>Email</label>
                  <input type="text"  value={details.email} 
                  onChange={(event) => {
                    const val = event.target.value
                    handleChange("email" , val)
                  }}/>
              </div>

              <div className='containerStyle'>
                  <label>Password</label>
                  <input type="text" value={details.password} 
                   onChange = {(event) => {
                    const val = event.target.value
                    handleChange("password" , val)
                   }}/>
              </div>
              <button onClick={handleLogin} className='btn btn-primary'>Login</button>
          </div>
      </div>
  )
}

export default LoginPage