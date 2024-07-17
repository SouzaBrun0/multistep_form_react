import React from 'react'

const UseForm = () => {
  return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Nome:</label>
            <input 
            type="text" 
            name="text" 
            id="name" 
            placeholder='Digite seu nome' 
            required/>
        </div>

        <div className="form-control">
            <label htmlFor="email">E-mail:</label>
            <input 
            name="text" 
            id="text" 
            placeholder='Digite seu text' 
            required/>
        </div>

    </div>
  )
}

export default UseForm