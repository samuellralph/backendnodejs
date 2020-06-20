import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";

export default class NotificationBar extends Component {
  state = {activeItem:''};

  handleItemClick = (e , { name }) => { this.setState({ activeItem: name}); };
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Menu position={"right"}>
          <Menu.Item>
            <Button primary>Sign up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button>Log-in</Button>
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    );
  }
}
