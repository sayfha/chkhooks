import React from 'react'
import { useState } from 'react'

const Search = ({text,setText}) => {
    
  return (
    <div className='war' >
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        
    </div>
  )
}

export default Search