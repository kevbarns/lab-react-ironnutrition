import React, {Component} from "react";

class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: 0
    };
  }

  handleFormInput(event) {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.newFood(this.state);
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: 0
    });
  }
  render() {
    return (
      <div className="FoodFrom">
        <form onSubmit={event => this.handleFormSubmit(event)}>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                onChange={event => this.handleFormInput(event)}
                class="input"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Calories</label>
            <div class="control">
              <input
                onChange={event => this.handleFormInput(event)}
                class="input"
                type="number"
                name="calories"
                placeholder="calories"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Image</label>
            <div class="control">
              <input
                onChange={event => this.handleFormInput(event)}
                class="input"
                type="url"
                name="image"
                placeholder="image url"
              />
            </div>
          </div>
          <button className="button is-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default FoodForm;
