import React from 'react';
import CardItem from './CardItem';
import PropTypes from 'prop-types';

const CardList = ({characters}) => (
    <div>
        {
            characters.map(character => {
                return <CardItem key={character.url} character={character}/>;
            })
        }
    </div>
);

CardList.propTypes = {
    characters: PropTypes.array
};

export default CardList
