import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import {SearchContainer} from './styles/Containers'

const SearchForm = (props) => {
    const handleChangeSearchText = (event) => props.onTextChange(event.target.value);

    return (
        <SearchContainer>
            <Input icon='search' placeholder='Search...' onKeyUp={handleChangeSearchText} />
        </SearchContainer>
    );
};

SearchForm.propTypes = {
    onTextChange: PropTypes.func,
};

export default SearchForm;
