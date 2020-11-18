import React from 'react';
import PropTypes from 'prop-types';
import {Message} from 'semantic-ui-react';

import CardItem from './CardItem';
import {ListContainer} from './styles/Containers';

const CardList = ({characters,searchText}) => {
    let noResultMessage;
    if (characters.length === 0) {
        let message;
        if (searchText === '') {
            message = `There are no characters to show`;
        } else {
            message = `There are no characters that match the search "${searchText}"`;
        }
        noResultMessage = (
            <Message info>
                <Message.Header>{message}</Message.Header>
            </Message>
        );
    }
    return (
        <ListContainer>
           {
                characters.map(character => {
                    return <CardItem key={character.url} character={character}/>;
                })
            }
            {noResultMessage}
        </ListContainer>
         
    );
};

CardList.propTypes = {
    characters: PropTypes.array,
    searchText: PropTypes.string
};

export default CardList
