import React from 'react';

const Characters = props => {
   console.log(props)
    return (
        <div>
            <div className='info-wrapper'>
                <h2 className='name'>{props.name}</h2>
                <div className='descrption'>
                    <p>Birth Year: {props.birth_year}</p>
                    <p>Height: {props.height}</p>
                </div>
            </div>
        </div>
    )
}

export default Characters; 