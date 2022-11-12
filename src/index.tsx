import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Navigator } from './navigator/Navigator';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store} >
    <Navigator />
  </Provider>
);

reportWebVitals();
