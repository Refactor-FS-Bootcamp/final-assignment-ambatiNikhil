
import React from 'react' 
import './CommentList.css'

const Admin = () => {

  const handleSubmission = () => {
    window.location.href = "/comments"
  }
  return (
    <div className='containerStyle'>
        <div>
            <textarea  rows="15" cols="40">

            </textarea> <br/>
            <button onClick={handleSubmission}  className='btn btn-success'>Add</button>
        </div>
        
    </div>
  )
}

export default Admin 


