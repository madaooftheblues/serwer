import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import StaffPage from './components/pages/StaffPage';
import { Router } from 'preact-router';

export function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <LoginPage path="/login" />
        <SignupPage path="/signup" />
        <StaffPage path="/staff" />
      </Router>
    </>
  );
}
