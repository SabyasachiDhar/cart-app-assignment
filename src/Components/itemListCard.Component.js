import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';


const Count = (props) => {
	const { onCountUp, onCountDown, count } = props;

	return (
		<div className="countCard">
      <button onClick={onCountUp}> Age Up </button>
      <div> Count <span>{count}</span></div>
      <button onClick={onCountDown}> Age Down </button>
		</div>
	)
}

class ItemListCard extends Component {
    constructor(props) {
      super(props);

    }
  
    render() {
      return (
        <div>
          Main Content
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
                    <Button onClick={() => this.props.addToCart(item, this.props.itemCount)} variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>


                {/* <Count 
                  id={item.id}
                  onCountUp={this.props.onCountUp}
                  onCountDown={this.props.onCountDown}
                  count={this.props.count}
                /> */}
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
      itemCount: state.reducerCount.itemCount,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      addToCart: (item, quantity) => dispatch({type: 'ADD_TO_CART', item, quantity})
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ItemListCard);