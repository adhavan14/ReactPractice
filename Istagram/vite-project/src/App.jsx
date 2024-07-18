import './App.css'
import SignUp from './pages/SignUp'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login'
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import UserContextProvider from "./component/UserContextProvider.jsx";

function App() {

  return (
      <UserContextProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/signUp" element={<SignUp/>}></Route>
                  <Route path="/" element={<Login/>}></Route>
                  <Route path="/home/:userId" element={<Home/>}></Route>
                  <Route path="/profile/:userId" element={<Profile/>}></Route>
              </Routes>
          </BrowserRouter>
      </UserContextProvider>
  )
}

export default App
