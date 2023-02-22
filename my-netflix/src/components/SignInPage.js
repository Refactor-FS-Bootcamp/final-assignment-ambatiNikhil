import React, { useState } from 'react'
import './SignInPage.css'
import { SignUpApicall } from '../ApiCalls'
const SignInPage = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChange = (key, value) => {
        setValues({
            ...values,
            [key]: value
        })
    }

    const handleSubmission = () => {
        console.log(values)
        // if(values.username !== "" && values.email !== "" && values.password !== ""){
        //     window.location.href = "/login"
        // }
        setValues({
            username: "",
            email : "",
            password: ""
        })
        SignUpApicall({
            username : values.username,
            eamil : values.email,
            password : values.password
        }).then((response) => {
            console.log(response)
            window.location.href = "/login"
        }).catch((error) => {
            console.log(error)
        })

        
    }

    return (
        <div className='signinCont'>
            <div className='signinForm'>
                <div className='form-box'>
                    <label>UserName</label>
                    <input type="text" value={values.username}
                        onChange={(event) => {
                            const val = (event.target.value)
                            handleChange("username", val);
                        }}
                        placeholder='Enter your Email' />
                </div>

                <div className='form-box'>
                    <label>Email</label>
                    <input type="text"
                        value={values.email}
                        onChange={(event) => {
                            const val = (event.target.value)
                            handleChange("email", val);
                        }}
                        placeholder='Enter your Email' />
                </div>

                <div className='form-box'>
                    <label>Password</label>
                    <input type="password"
                        value={values.password}
                        onChange={(event) => {
                            const val = (event.target.value)
                            handleChange("password", val);
                        }}
                        placeholder='Enter your password' />
                </div>

                {/* <div className='form-box'>
                <label>UserName</label>
                <input type="text" />
            </div> */}
                <button onClick={handleSubmission} className='btn btn-success mt-3'>Register</button>
            </div>
        </div>
    )
}

export default SignInPage