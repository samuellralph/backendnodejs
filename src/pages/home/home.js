import React from 'react';
import { Grid } from 'semantic-ui-react';
import MenuHome from '../../components/MenuHome';
import ContentHome from '../../components/ContentHome';

export default function home () {
        return (
            <>
                <Grid columns={2} padded={ "vertically"} style={{height: "100%"}} >
                <Grid.Column width={4} color='red' >
                    <MenuHome />
                </Grid.Column>
                <Grid.Column width={13} color='olive'>
                    <ContentHome />
                </Grid.Column>
                </Grid>
            </>
        );
};
