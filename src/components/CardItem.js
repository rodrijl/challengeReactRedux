import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {deleteCharacter} from '../actions/actions';
import { connect } from 'react-redux';
import "./styles/CardItem.css";

class CardItem extends Component {
  removeCharacter = () => {
    const {url} = this.props.character;
    this.props.deleteCharacter(url);
  }
  render(){
    const {name,height,gender} = this.props.character;

        return (
            <div className="card-characters">               
              <Card className="">
                <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                  />
                  <Card.Header>{name}</Card.Header>
                  <Card.Meta>{height}</Card.Meta>
                  <Card.Meta>{gender}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  {/* <div className='ui two buttons'> */}
                    <Button basic color='red' floated='right' onClick={this.removeCharacter}>
                      Remove
                    </Button>
                  {/* </div> */}
                </Card.Content>
              </Card>
            
             </div>
        );
    }
}

CardItem.propTypes = {
  character: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  deleteCharacter: (url) => deleteCharacter(dispatch, url)
});

export default connect(null, mapDispatchToProps)(CardItem);
