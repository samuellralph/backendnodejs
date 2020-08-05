import React, { Component } from "react";

export default class NotificationBar extends Component {
  state = {activeItem:''};

  handleItemClick = (e , { name }) => { this.setState({ activeItem: name}); };
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>Barra de notificação</>
    );
  }
}
