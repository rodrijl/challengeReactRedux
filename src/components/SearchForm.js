import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import "./styles/SearchForm.css"

export class SearchForm extends Component {

    handleChangeSearchText = (event) => {
        const text = event.target.value;
        this.props.onTextChange(text);
    }

    render() {
        return (
            <div className="search-text">
                <Input icon='search' placeholder='Search...' onKeyUp={this.handleChangeSearchText} />
            </div>
        )
    }
}

SearchForm.propTypes = {
    onTextChange: PropTypes.func,
};

export default SearchForm;
