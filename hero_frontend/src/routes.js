import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/bethehero/" exact component={Logon} />
        <Route path="/bethehero/register" component={Register} />
        <Route path="/bethehero/profile" component={Profile} />
        <Route path="/bethehero/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}