import LoginPage from './login/LoginPage'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from './login/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUp/>
        <LoginPage/>
      </header>
    </div>
  );
}

export default App;

//bootstrap/dist/css/bootstrap.min.css