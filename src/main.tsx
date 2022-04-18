import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FlagshipProvider } from '@flagship.io/react-sdk';

const Main = () => {
  const [context, setContext] = useState({});
  const [id, setId] = useState();
  const [isAuthenticated, setIsAuthenticate] = useState(!id);

  return (
    <FlagshipProvider
      envId=""
      apiKey=""
      visitorData={{
        id: id,
        context,
        isAuthenticated: isAuthenticated,
      }}
    >
      <App />
    </FlagshipProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
