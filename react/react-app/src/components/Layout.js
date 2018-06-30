import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: "Can jet fuel melt.." };
  }

  changeTitle(title) {
    this.setState({ title: title });
  }

  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          changeTitle={this.changeTitle.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}
