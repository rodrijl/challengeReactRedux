import React, { useState, useEffect } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

import SearchForm from './components/SearchForm';
import {getCharacters} from './actions/actions';
import CardList from './components/CardList';

import 'semantic-ui-css/semantic.min.css';

const App = (props) => {
    const [searchText, setSearchText] = useState('');
    const handleChangeSearchText = (text) => setSearchText(text);

    const charactersToShow = props.characters.filter(character => {
        if (searchText === '') {
            return character;
        } else {
            if (character.name.toLowerCase().includes(searchText)) {
                return character;
            }
        }
    });

    useEffect(() => {
            props.getCharacters();
    }, []);

    return (
        <section>
            <Dimmer active={props.loading} inverted>
                <Loader size='large'>Loading...</Loader>
            </Dimmer>
            <SearchForm onTextChange={handleChangeSearchText}/>
            <CardList characters={charactersToShow} searchText={searchText}/>
        </section>
    );
};

const mapStateToProps = state => ({
    characters: state.characters,
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    getCharacters: () => getCharacters(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
