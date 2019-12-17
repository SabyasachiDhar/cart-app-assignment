import React, { Component } from 'react';
import { connect } from 'react-redux';
const Link = require("react-router-dom").Link;


class CartIcon extends Component {

  render() {
    return (
      <Link to="/cart" className="cardIcon">
        Card Icon {this.props.quantity}
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      quantity: state.reducerCount.quantity,
    }
  }

export default connect(mapStateToProps)(CartIcon);