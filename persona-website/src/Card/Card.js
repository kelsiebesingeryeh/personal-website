import React from 'react'
import './Card.css'

const Card = ({title, shortOverview, stack, description}) => {
    return (
        <div className='projectDetailsCard'>
            <p>{title}</p>
            <p>{shortOverview}</p>
            <p>{stack}</p>
            <p>{description}</p>
        </div>
    )
}
export default Card