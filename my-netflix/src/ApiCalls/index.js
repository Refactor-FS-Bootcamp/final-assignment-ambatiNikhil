import axios from 'axios'

export const SignUpApicall = (data) => {
    const {username,email,password} = data 
    return (
        fetch({
            url : "http://localhost:8800/api/auth/register",
            method : "POST",
            data : {
                "username" : username,
                "email" : email,
                "password" : password
            }
        })
    )

}

export const logInApiCall = (data) => {
    const {email , password} = data 

    return(
        fetch({
            url : "http://localhost:8800/api/auth/register",
            method : "POST",
            data : {
                "email" : email,
                 "password" : password
            }
        })
    )
}