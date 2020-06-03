import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NotificationBar extends Component {
  state = {activeItem:'option1'};

  handleItemClick = (e , { name }) => { this.setState({ activeItem: name}); };
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="option1"
          active={activeItem==="option1"}
          onClick={this.handleItemClick}
        >
          Option 1
        </Menu.Item>

        <Menu.Item
          name="option2"
          active={activeItem==="option2"}
          onClick={this.handleItemClick}
        >
          Option 2
        </Menu.Item>

        <Menu.Menu position={"right"}>
          <Menu.Item
            name="option3"
            active={activeItem==="option3"}
            onClick={this.handleItemClick}
          >
            Option 3
          </Menu.Item>

          <Menu.Item
            name="option4"
            active={activeItem==="option4"}
            onClick={this.handleItemClick}
          >
            Option 4
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
