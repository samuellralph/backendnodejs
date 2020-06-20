import React from 'react';
import { Grid } from 'semantic-ui-react';
import MenuHome from '../../components/MenuHome';
import ContentHome from '../../components/ContentHome';
import NotificationBar from '../../components/NotificationBar';

export default function home () {
        return (
          <>
            <Grid stackable columns={2} style={{ height: "100%" }}>
              <Grid.Row >
                <Grid.Column width={2} style={{ backgroundColor: '#1b1c1d', height: "50px" }}>
                  a
                </Grid.Column>
                <Grid.Column width={14} style={{backgroundColor: '#1b1c1d', height: "50px" }}>
                    <NotificationBar />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row width={13} style={{ height: "100%" }}>
                <Grid.Column width={2} style={{ height: "50px" }}>
                  <MenuHome />
                </Grid.Column>
                <Grid.Column width={14} >
                  <ContentHome />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </>
        );
};
