import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Navigator } from './navigator/Navigator';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { GlobalStyled } from './shared/styles/GlobalStyled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store} >
    <GlobalStyled />
    <Navigator />
  </Provider>
);

reportWebVitals();
