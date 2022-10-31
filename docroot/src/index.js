import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Calculator from './components/Calculator/NewCalculator';

// EXAMPLE IMPORT of FIREBASE:
// import { db, auth } from './services/firebase';

const App = () => {
  return (
    <div>
      <Calculator />
    </div>
  );
};

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render app to root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
