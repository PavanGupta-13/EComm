import LoginPage from './login/LoginPage'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from './login/SignUp';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <header className="App-header">
        <SignUp/>
        <LoginPage/>
      </header>
    </div>
    </AuthProvider>
  );
}

export default App;

//bootstrap/dist/css/bootstrap.min.css