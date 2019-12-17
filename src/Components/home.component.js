import React, { Component, Fragment } from 'react';
import ItemListCard from './itemListCard.Component';
 
class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this.cardList();
  }

  cardList() {
    fetch("https://api.myjson.com/bins/qzuzi")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <Fragment>
        {/* <SortCard /> */}
        <ItemListCard dataList={this.state.items}/>
      </Fragment>
    );
  }
}

export default Home;