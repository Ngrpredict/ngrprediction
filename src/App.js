import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './firebase/AuthContext';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import FreePredictions from './components/FreePredictions';
import PremiumPredictions from './components/PremiumPredictions';
import AdminDashboard from './components/AdminDashboard';
import PaymentSuccess from './components/PaymentSuccess';
import NotFoundPage from './components/NotFoundPage';
import ContactPopup from './components/ContactPopup';

const PrivateRoute = ({ children }) => {
  const { currentUser, isPaidUser } = useAuth();
  return currentUser && isPaidUser ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
  const { currentUser, isAdmin } = useAuth();
  return currentUser && isAdmin ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<><HomePage /><ContactPopup /></>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/free" element={<FreePredictions />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route
            path="/premium"
            element={
              <PrivateRoute>
                <PremiumPredictions />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
