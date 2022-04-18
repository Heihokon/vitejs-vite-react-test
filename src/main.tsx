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
      envId="c1ndrd07m0300ro0jf20"
      apiKey="QzdTI1M9iqaIhnJ66a34C5xdzrrvzq6q8XSVOsS6" // <= Required in next major release
      timeout={2}
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
