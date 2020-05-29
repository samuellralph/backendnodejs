import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import NotificationBar from './components/NotificationBar';
import { Grid } from 'semantic-ui-react';
import MenuHome from './components/MenuHome';
import ContentHome from './components/ContentHome';
import ContentBottom from './components/ContentBottom';

ReactDOM.render(
  <React.StrictMode>
      <NotificationBar />
      <Grid columns={2} stackable stretched={true} style={{height: "100%"}}>
        <Grid.Column width={3}>
          <MenuHome />
        </Grid.Column>
        <Grid.Column width={13}>
          <ContentHome />
        </Grid.Column>
      </Grid>
      <ContentBottom />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
