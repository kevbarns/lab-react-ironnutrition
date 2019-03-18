import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./FoodBox";

import foods from "./foods.json";
import FoodForm from "./FoodForm";
import SearchBar from "./SearchBar";
import FoodList from "./FoodList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods
    };
  }

  handleNewFood(foodArray) {
    const food = this.state.foods;
    food.unshift(foodArray);
    this.setState({foods: food});
  }

  handleSearch(wordSearch) {
    const filtered = foods.filter(e => {
      return e.name.toLowerCase().indexOf(wordSearch.toLowerCase()) > -1;
    });
    this.setState({foods: filtered});
  }

  render() {
    const {foods} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div className="section">
            <SearchBar
              searchWord={word => {
                this.handleSearch(word);
              }}
            />
            {/* <button className="button is-primary is-medium">
              Add new food
            </button> */}
            <FoodForm
              newFood={food => {
                this.handleNewFood(food);
              }}
            />
          </div>
          <div className="section">
            <div className="columns">
              <div className="column">
                {foods.map((oneFood, index) => {
                  return (
                    <FoodBox
                      name={oneFood.name}
                      calories={oneFood.calories}
                      image={oneFood.image}
                      key={index}
                    />
                  );
                })}
              </div>
              <div className="column">
                <FoodList />
              </div>
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
