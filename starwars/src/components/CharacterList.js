import React from 'react';
import Characters from './Characters';
import shortid from 'shortid'; 

const CharacterList = props => {
    return (
        <div>
            {props.starwarsChars.map(character => 
                <Characters 
                key= {shortid.generate()}
                name={character.name}
                birth_year={character.birth_year}
                height={character.height}
                />)}
        </div>
    )
}

export default CharacterList; 