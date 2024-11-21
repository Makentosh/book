import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer/rootReducer';
import './index.scss';
import App from './components/App';


ReactDOM.render(
    <StrictMode>
      <Provider store={ store }>
        <App/>
      </Provider>
    </StrictMode>, document.getElementById('root'));

