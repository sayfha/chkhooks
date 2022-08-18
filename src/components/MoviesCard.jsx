import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardss from './Cardss.css'
import RatingStar from './RatingStar';
const MoviesCard = ({e}) => {
  console.log(e);
  return (
    <div >
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.img} />
      <Card.Body>
        <Card.Title>{e.nameMovie}</Card.Title>
        <Card.Text>
         {e.date}
         
        </Card.Text>
      
        <Card.Text>
        <RatingStar rating={e.rate} />
        </Card.Text>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default MoviesCard