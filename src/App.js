import LoginPage from './login/LoginPage'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { createContext, useState } from 'react';
import Home from './home/Home'
import Nav from './home/Nav'
import HsptlData from './hospitaldata/HsptlData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './cart/Cart';
// import SignUp from './login/SignUp';
// import { AuthProvider } from './context/AuthContext';
const HomePageDisp = createContext()
const NameShare = createContext()

function App() {
  
  const [disp,setDisp] = useState(false)
  const [pName,setPName] = useState('')
  const [cQty,setcQty] = useState(0)
  const [reset,setReset] = useState(false)

  const getcQty= (i)=>{
    let fetchedCQty = i
    setcQty(fetchedCQty)
  }

  return (
    // <AuthProvider>
    <div className="App">
      <header className="App-header">
        {/* <SignUp/> */}
        {!disp && <div className="Login spacing">
        <div className="title"> 
          <h1 className="display-1" style={{color:"#ff9933"}}>Medi</h1>
          <h1 className="display-1" style={{color:"#0099cc"}}>Buddy</h1>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-badge-tm-fill" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.295 3.995V11H4.104V5.995h-1.7V5H7v.994H5.295zM8.692 7.01V11H7.633V5.001h1.209l1.71 3.894h.039l1.71-3.894H13.5V11h-1.072V7.01h-.057l-1.42 3.239h-.773L8.75 7.008h-.058z"/>
          </svg></span>
        </div>
        </div>}
        <HomePageDisp.Provider value={setDisp}>
          <NameShare.Provider value={setPName}>
          {!disp && <div className="Login"><LoginPage/></div>}
          </NameShare.Provider>
        </HomePageDisp.Provider>
        {disp && <>

        <BrowserRouter>
        <Nav pName={pName} cQty={cQty} setDisp={setDisp}/>
        <Routes>
          <Route path="/HspData" element={<HsptlData/>} />
          <Route path="/" element={<Home pName={pName} getcQty={getcQty}/>}/>
          <Route path="/Cart" element={<Cart cQty={cQty} setReset={setReset}/>}/>
        </Routes>
        </BrowserRouter>

        {/* <Nav pName={pName} cQty={cQty}/> */}
        {/* <Home pName={pName} getcQty={getcQty}/> */}
        
        </>}
      </header>
    </div>
    // </AuthProvider>
  );
}

export {HomePageDisp,NameShare};
export default App;


//bootstrap/dist/css/bootstrap.min.css