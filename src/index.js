// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
//
import App from './App';

// ----------------------------------------------------------------------

ReactDOM.render(
  <SettingsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SettingsProvider>,
  document.getElementById('root')
);
