import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home"
import GameList from "./components/Posts/GameList/GameList";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Create from "./components/Create/Create";

function App() {
  
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/catalog" element={<GameList />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </>
    );
};

export default App;
