import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsuarioList from './components/UsuarioList';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/home" element={<MainContent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/usuarios" element={<UsuarioList />} />
              {/* Use PrivateRoute como um wrapper */}
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
