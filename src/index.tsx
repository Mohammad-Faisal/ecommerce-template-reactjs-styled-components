import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { Provider } from 'react-redux';
import rootStore from './stores/rootStore';
import { createBrowserHistory } from 'history';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'




(async (window) => {

  const initialState = {};
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '10px',
    transition: transitions.FADE
  }
  const history = createBrowserHistory({ basename: '' });
  const store = rootStore(initialState, history);
  const rootEl = document.getElementById('root');

  const render = (Component, el) => {
    ReactDOM.render(
      <React.StrictMode>

        <AlertProvider template={AlertTemplate} {...options}>
          <Provider store={store.store}>
            <Component history={history} dispatch={store.dispatch} />
            {/* <PersistGate loading={null} persistor={store.persistor}>
            <Component history={history} dispatch={store.dispatch} />
          </PersistGate> */}
          </Provider>
        </AlertProvider>

      </React.StrictMode>
      ,
      el
    );
  };

  render(App, rootEl);
})(window);
