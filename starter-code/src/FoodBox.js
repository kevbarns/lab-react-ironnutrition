import React, {Component} from "react";
import "./FoodBox.css";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickAdd(key) {
    this.props.getItemClicked(this.state);
  }

  render() {
    const {name, calories, image, key} = this.props;
    return (
      <div className="box" key={key}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    this.handleClickAdd(key);
                  }}
                  className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
