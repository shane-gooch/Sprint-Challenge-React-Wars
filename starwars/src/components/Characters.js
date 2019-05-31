import React from 'react';

const Characters = props => {
   
    return (
        <div>
            <div className='info-wrapper'>
                <h2 className='name'>{props.name}</h2>
                <div className='descrption'>
                    <p>Birth Year: <span>{props.birth_year}</span></p>
                    <p>Height: <span>{props.height}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Characters; 