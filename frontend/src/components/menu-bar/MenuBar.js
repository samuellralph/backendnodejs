import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuBar extends Component {
    render() {
        return (
            <Menu inverted>
                <Menu.Item name='Mangá'/>
                <Menu.Item  name='Anime'/>
            </Menu>
        )
    }
}
