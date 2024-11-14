// Frontend/components/AuthContext.js
/*import React, { createContext, useState, useEffect } from 'react';
//import jwt_decode from 'jwt-decode';
import * as jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded);
    }
  }, []);

  const login = async (email, password) => {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);
      setUser(decoded);
    }
  };

  const signup = async (username, email, password) => {
    const response = await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);
      setUser(decoded);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Frontend/components/AuthContext.jsx
/*import React, { createContext, useState, useEffect } from 'react';
import * as jwt_decode from 'jwt-decode'; // Use * as syntax to import the whole module

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token); // Use jwt_decode as a function
      setUser(decoded);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        const decoded = jwt_decode(data.token); // Use jwt_decode as a function
        setUser(decoded);
      } else {
        console.error("Login failed:", data.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const signup = async (username, email, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        const decoded = jwt_decode(data.token); // Use jwt_decode as a function
        setUser(decoded);
      } else {
        console.error("Signup failed:", data.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Frontend/components/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";  // Correct import

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);  // Correct usage of jwt_decode
      setUser(decoded);
    }
  }, []);

  const login = async (email, password) => {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);  // Correct usage of jwt_decode
      setUser(decoded);
    }
  };

  /*const signup = async (username, email, password) => {
    const response = await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);  // Correct usage of jwt_decode
      setUser(decoded);
    }
  };*/
  const signup = async (username, email, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Signup failed:', errorData.message); // Log the error message
        return; // Optionally show the error message to the user
      }
  
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        const decoded = jwt_decode(data.token);
        setUser(decoded);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// Frontend/components/AuthContext.js
