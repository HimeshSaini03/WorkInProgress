/*import React from "react";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from './components/AuthContext.jsx';

function App() {
  return <Layout />;
}

export default App;  */

// Frontend/App.jsx
import React from 'react';
import Layout from './components/Layout/Layout';
import { AuthProvider } from './components/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default App;


