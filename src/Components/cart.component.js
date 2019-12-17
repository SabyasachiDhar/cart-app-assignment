import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

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
class Cart extends Component {
  
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.addToCardHistory);
    return (
        <section className="container-fluid">
          <div className="row">
            {
              this.props.addToCardHistory.map((el) => {
                return(
                    <div className="col-sm-6" key={el.id}>
                      <Card className="mb-3">
                      <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Text>
                          <Count 
                            id={el.id}
                            onCountUp={this.props.onCountUp}
                            onCountDown={this.props.onCountDown}
                            count={this.props.count}
                          /> 
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
                )
              })
            }     
          </div>     
        </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addToCardHistory: state.reducerCount.addToCardHistory,
    count: state.reducerCount.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onCountUp: () => dispatch({type: 'COUNT_ADD'}),
    onCountDown: () => dispatch({type: 'COUNT_SUB'}),
    onDeleteItem: (id) => dispatch({type: 'DELETE_ITEM', key: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);