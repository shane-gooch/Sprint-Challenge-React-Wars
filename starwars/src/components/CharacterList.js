import React from 'react';
import Characters from './Characters';
import shortid from 'shortid'; 

const CharacterList = props => {
    console.log(props)
    return (
        <div>
            {props.starwarsChars.map(character => 
                <Characters
                key= {shortid.generate()}
                name= {character.name}
                birth_year= {character.birth_year}
                height= {character.height}
                films= {character.films.map(film => {
                    return film
                })}
                />)}
        </div>
    )
}

export default CharacterList;   