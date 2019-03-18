import React, {Component} from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSearchInput(event){
    this.props.searchWord(event.target.value);
  }

  render() {
    return (
      <div class="field">
        <div class="control">
          <input
            onChange={event => this.handleSearchInput(event)}
            class="input"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
