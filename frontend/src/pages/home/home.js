import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import ContentHome from '../../components/ContentHome';
import NotificationBar from '../../components/NotificationBar';
import SearchBar from '../../components/search-bar/SearchBar';
import MenuBar from '../../components/menu-bar/MenuBar';

export default function home () {
        return (
          <>
            <Grid stackable columns={3} style={{ height: "100%" }}>
              <Grid.Row>
                <Grid.Column
                  width={3}
                  style={{ backgroundColor: "#1b1c1d" }}>
                  <MenuBar />
                </Grid.Column>
                <Grid.Column
                  width={11}
                  style={{ backgroundColor: "#1b1c1d" }}>
                    <div style={{marginTop: '5px', height: "36px", verticalAlign: 'baseline', width: '100%'}}>
                      <SearchBar />
                    </div>

                </Grid.Column>
                <Grid.Column
                  width={2}
                  style={{ backgroundColor: "#1b1c1d" }}>
                  <NotificationBar />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3} style={{ height: "100%" }}>
                <Grid.Column width={3} />
                <Grid.Column width={11}>
                  <ContentHome />
                </Grid.Column>
                <Grid.Column width={2} />
              </Grid.Row>
            </Grid>
          </>
        );
};
