import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// library imports
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

//constant initialisation
const history = createBrowserHistory();

if (
  history.location &&
  history.location.state &&
  history.location.state.warningMessageHidden !== undefined
) {
  const state = { ...history.location.state };
  delete state.warningMessageHidden;
  history.replace({ ...history.location, state });
}

ReactDOM.render(
      <Router history={history}>
        <App />
      </Router>,
     document.getElementById('root'));
registerServiceWorker();
