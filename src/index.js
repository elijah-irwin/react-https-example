import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'Auth Token';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig);

  // Edit the req config before returning if u want (ie. add headers)
  return requestConfig;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(responseConfig => {
  console.log(responseConfig);

  // Edit the res config before returning if u want (ie. add headers)
  return responseConfig;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
