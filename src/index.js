import React, {
  lazy,
  Suspense
} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/loading/Loading';
import { ColorModeContextProvider } from './contexts/themeContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const App = lazy(() => import('./app/App'));

ReactDOM.render(
  <BrowserRouter>
    <ColorModeContextProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ColorModeContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
