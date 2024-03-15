import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import Portal from './Portal';
import Home from './Home';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import EditMovie from './EditMovie';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';
import {Routes,Route} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper';



function App() {
  const [mode,setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper style={{minHeight:"100vh",borderRadius:"0%"}} elevation={9}>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/portal" element={<Portal mode={mode} setMode={setMode} />}>
              <Route path="home" element={<Home />}/> 
              <Route path="addmovie" element={<AddMovie />}/>
              <Route path="movie" element={<MovieList />}/>
              <Route path="edit/:id" element={<EditMovie />}/>
              <Route path="view/:id" element={<MovieDetail />}/>
            </Route>
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
