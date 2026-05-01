import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from "./pages/landingpage/LandingPage";
import { SignUpPage } from './pages/authentication/SignUpPage';
import { SignInPage } from './pages/authentication/SignInPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </AuthProvider>
    </Router>
  );
}