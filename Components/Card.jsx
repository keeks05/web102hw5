import { useState, useEffect } from 'react'

const Card = ({brew}) => {

   return (
      <div className="card-container">
         <div className="name">
            <h4>Name</h4>
            <p>{brew.name}</p>
         </div>
         <div className="location">
            <h4>Location</h4>
            <p>{brew.city}, {brew.state}</p>
            <p>{brew.postal_code}</p>

         </div>
         <div className="website">
            <h4>Socials</h4>
            <p>{brew.phone}</p>
            <p>{brew.website_url}</p>
         </div>
      </div>
   )
};

export default Card;