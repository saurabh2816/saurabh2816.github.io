import React from "react";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
        <input onChange={this.handleChange.bind(this)} />
      </header>
    );
  }
}
