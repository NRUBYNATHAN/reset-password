
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";

import { Forgot } from './Forgot';
import { Reset } from './Reset';
import { SignUp } from './SignUp';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
export default function App(){
  const navigate=useNavigate()
  return(

    <div>
           <AppBar position="static">
        <Toolbar>

          <Button onClick={()=>navigate("/forgot-password")} color="inherit">FORGOT</Button>
          <Button onClick={()=>navigate("/reset-password")} color="inherit">RESET</Button>
          <Button onClick={()=>navigate("/signup")} color="inherit">SIGNUP</Button>
         

        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/forgot-password" element={ <Forgot/> } />
        <Route path="/reset-password" element={ <Reset/> } />
        <Route path="/" element={ <SignUp/> } />
      </Routes>
     
    </div>
  );
}

