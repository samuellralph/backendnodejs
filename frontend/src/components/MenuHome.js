import React, { Component } from "react";
import {Menu} from 'semantic-ui-react';

export default class MenuHome extends Component {
  state = { activeItemManga: '', activeItemAnime: ''};
  

  handleItemMangaClick = (e, { name }) => this.setState({ activeItemManga: name, activeItemAnime: ''});
  handleItemAnimeClick = (e, { name }) => this.setState({ activeItemAnime: name , activeItemManga: ''});

  render() {
    const activeItemManga = this.state.activeItemManga;
    const activeItemAnime = this.state.activeItemAnime;//this.state.activeItemAnime;

    return (
      <Menu pointing secondary vertical>
        <Menu.Item>
          
          <Menu.Item
            name="Lançamentos"
            active={activeItemManga === "Lançamentos"}
            onClick={this.handleItemMangaClick}
          />
          <Menu.Item
            name="Destaques"
            active={activeItemManga === "Destaques"}
            onClick={this.handleItemMangaClick}
          />
        </Menu.Item>
        <Menu.Item>
          
          <Menu.Item
            name="Lançamentos"
            active={activeItemAnime === "Lançamentos"}
            onClick={this.handleItemAnimeClick}
          />
          <Menu.Item
            name="Destaques"
            active={activeItemAnime === "Destaques"}
            onClick={this.handleItemAnimeClick}
          />
        </Menu.Item>
      </Menu>
    );
  }
}
