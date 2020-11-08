import React, { Component } from "react";

class MovieForm extends Component {
  handleSave = () => {
    // this.props.history.replace("/products");
    console.log("Save");
  };

  render() {
    return (
      <div>
        <h1>Movie Form - {this.props.match.params._id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default MovieForm;
