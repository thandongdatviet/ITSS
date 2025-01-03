// src/layout/AuthLayout.jsx
import { Outlet } from 'react-router-dom';
import './authLayout.css';
function AuthLayout() {
  return (
    <div id="auth-background">
      <div id="auth-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;