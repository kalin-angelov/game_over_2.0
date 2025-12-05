import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home"
import GameList from "./components/Posts/GameList/GameList";
import Register from "./components/Register/Register";

function App() {
  
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/catalog" element={<GameList />} />
            </Routes>
        </>
    );
};

export default App;
