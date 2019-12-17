import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';




class ItemListCard extends Component {
    constructor(props) {
      super(props);

    }
  
    render() {
      return (
        <div>
          <div className="row">
          {
            this.props.dataList.map((item) => (
                <div className="col-sm-3 mb-4" key={item.id}>
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={item.img_url} />
                    <Card.Body>
                      <Card.Title>{ item.name }</Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                      <Button onClick={() => this.props.addToCart(item)} variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
            ))
          }
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      itemCount: state.reducerCount.itemCount
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      addToCart: (item) => dispatch({type: 'ADD_TO_CART', historyAddToCart:item})
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ItemListCard);