import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import  {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/sign-in/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/register" replace />} path="/" />

          <Route element={<App />} path="/register">
            <Route index element={<Login />} />
          </Route>
          <Route element={<App />} path="/login">
            <Route index element={<Login />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
