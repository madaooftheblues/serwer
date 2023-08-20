import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import { Router } from 'preact-router';

export function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <LoginPage path="/login" />
        <SignupPage path="/signup" />
      </Router>
    </>
  );
}
