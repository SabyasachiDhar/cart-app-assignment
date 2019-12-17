import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import CartIcon from './cartIcon.component';
import Search from './search.component';


class Header extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headerWrapper">
        <Navbar expand="lg" variant="dark" bg="primary">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              
              <Navbar.Text>
                <Search itemCount={this.props.historyAddToCart}/>
              </Navbar.Text>
              <Navbar.Text>
                <CartIcon />
              </Navbar.Text>
              
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
