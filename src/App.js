import LoginPage from './login/LoginPage'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { createContext, useState } from 'react';
// import SignUp from './login/SignUp';
// import { AuthProvider } from './context/AuthContext';
const HomePageDisp = createContext()

function App() {
  
  const [disp,setDisp] = useState(false)
  return (
    // <AuthProvider>
    <div className="App">
      <header className="App-header">
        {/* <SignUp/> */}
        <div className="title"> 
          <h1 className="display-1" style={{color:"#ff9933"}}>Medi</h1>
          <h1 className="display-1" style={{color:"#0099cc"}}>Buddy</h1>
        </div>
        <HomePageDisp.Provider value={setDisp}>
          {!disp && <LoginPage/>}
        </HomePageDisp.Provider>
      </header>
    </div>
    // </AuthProvider>
  );
}

export {HomePageDisp};
export default App;


//bootstrap/dist/css/bootstrap.min.css