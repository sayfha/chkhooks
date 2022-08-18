import React from 'react'

const RatingStar = ({rating}) => {
    const StarRating=(x)=>{
        let stars=[]
        for (let i = 0; i < 5; i++) {
            if (i<x){
                stars.push(<span key={i} style={{color:"gold",cursor:"pointer",fontsize:"22px"}}>✮</span>)
            }else{
                stars.push(<span key={i} style={{color:"black",cursor:"pointer",fontsize:"22px"}}>✮</span>)
            }
            
        }
        return stars;
    }
  return (
    <div>
        {StarRating(rating)}
    </div>
  )
};

export default RatingStar