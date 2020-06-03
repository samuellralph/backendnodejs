import React, { Component } from 'react';
import NotificationBar from '../../components/NotificationBar';
import { Grid } from 'semantic-ui-react';
import MenuHome from '../../components/MenuHome';
import ContentHome from '../../components/ContentHome';
import ContentBottom from '../../components/ContentBottom';


export default class home extends Component {
    render() {
        return (
            <>
                <NotificationBar />
                <Grid columns={2} padded={ "vertically"} stackable stretched={true} style={{height: "100%"}} >
                <Grid.Column width={3}>
                    <MenuHome />
                </Grid.Column>
                <Grid.Column width={13}>
                    <ContentHome />
                </Grid.Column>
                </Grid>
                <ContentBottom />
            </>
        )
    }
}
