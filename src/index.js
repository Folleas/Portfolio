import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import ProjectDisplay from './ProjectDisplay';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div>
      <Navigation logoTitle="Portfolio"/>
      <Header title="Portfolio" button="Le Button s'il vous plait"/>
      <Services/>
      <ProjectDisplay/>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
