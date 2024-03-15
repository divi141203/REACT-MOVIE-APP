import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function TopBar({mode,setMode}) {
    const navigate = useNavigate()
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Button color="inherit" style={{fontFamily:" Gabriola", fontSize:"20px", fontWeight:"bold"}} onClick={() => navigate("/portal/home")}>
            Home
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="inherit" style={{fontFamily:" Gabriola", fontSize:"20px" , fontWeight:"bold"}} onClick={() => navigate("/portal/addmovie")}>
            Add Movie
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="inherit" style={{fontFamily:" Gabriola", fontSize:"20px", fontWeight:"bold"}} onClick={() => navigate("/portal/movie")}>
            Movies
        </Button>
        
        <Button 
          style={{marginLeft: "60%"}}
          startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon/>}
          color="inherit"
          onClick={() => setMode(mode ==="light" ? "dark" : "light")}>

          {mode === "light" ? "dark" : "light"}Mode

        </Button>
        {/* <Button style={{marginLeft :"auto"}}
        color='inherit'
        onClick={() => LogOut()}>LogOut</Button> */}
        </Toolbar>
      </AppBar>
      </div>
  );
}