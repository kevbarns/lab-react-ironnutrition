import React, { Component } from 'react';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {quantity, name, calories} = this.props;
    return ( 
      <div className="foodList">
        <h1>Today's Food : </h1>
        <div className="content">
        <ul>
          <li>{quantity} {name} - {calories} </li>
        </ul>
        </div>
      </div>
     );
  }
}
 
export default FoodList
