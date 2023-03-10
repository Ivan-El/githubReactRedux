import React from 'react';
import App from './components/App/App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
const container = document.getElementById('root');

const root = createRoot(container);
root.render(
<Provider store={store}>
    <App />
  </Provider>
  );
 
{
  /* <Provider store={store}>
    <App />
  </Provider>, */
}
