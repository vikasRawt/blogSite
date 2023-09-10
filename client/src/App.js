import React, { useContext } from "react";
import "./App.css";
import TopBar from "./components/topBar/topbar";
import Register from "./components/pages/register/register";
import Home from './components/pages/home/home.jsx';
import SinglePage from './components/pages/singlePage/singlePage';
import Write from './components/pages/write/write';
import Settings from './components/pages/settings/settings';
import Login from './components/pages/login/login';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Context } from "./context/Context";
import Post from "./components/post/post";
function App() {
  const {user}= useContext(Context);
  return (<>
       <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<SinglePage />} />
        <Route element={<Outlet />} />
      </Routes>
    </Router>
    </>
  );

      
    
  
}

export default App;
