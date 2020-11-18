import React, { Component } from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import SearchForm from './components/SearchForm';
import {getCharacters} from './actions/actions';
import CardList from './components/CardList';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchText: ''
    }
  }
 
  componentDidMount(){
    this.props.getCharacters();
  }

  handleChangeSearchText = (text) => {
    this.setState(() =>({
      searchText: text
    }));
  }
 
  render() {
    const charactersToShow = this.props.characters.filter(character => {
      if (this.props.searchText === '') {
          return character;
      } else {
          if (character.name.toLowerCase().includes(this.state.searchText)) {
              return character;
          }
      }
    });

    return (
      <Segment>
          <Dimmer active={this.props.loading} inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>

          <SearchForm onTextChange={this.handleChangeSearchText}/>
          <CardList characters={charactersToShow}/>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getCharacters: () => getCharacters(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
