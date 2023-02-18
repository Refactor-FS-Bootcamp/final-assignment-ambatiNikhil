import React from 'react'

const Comment = (props) => {
  const comments = ["Learning is a never ending process" , "Success is not a destination but a journey" ,
  "Smooth roads never make good driver" , "Heard word is key for success"]
  return (
    <div>
        {comments.map((comment) => {
          return <div key={comments.indexOf(comment)} className='commentStyle'>
                  <p>{comment}</p>
                  <div className='buttonContainer'>
                  <button className='btn btn-success '>EDIT</button>
                  <button className='btn btn-warning'>DELETE</button>
                  </div>
                 </div>
        })}
    </div>
  )
}

export default Comment