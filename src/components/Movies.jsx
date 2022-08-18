import React from 'react'
import MoviesCard from './MoviesCard'

const Movies = ({movie}) => {
  return (
    <div className='hell'>
        {movie.map(e=><MoviesCard e={e} key={e.id}/>)}
    </div>
  )
}

export default Movies