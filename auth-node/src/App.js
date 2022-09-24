import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./view/Home";
import { Singup } from "./view/Singup";
import { ValidEmail } from "./view/ValidEmail";
import { ForgotPassword } from "./view/ForgotPassword";
import { Client } from "./view/Client";
import { Profile } from "./view/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Singup" element={<Singup />} />
        <Route path="/ValidEmail" element={<ValidEmail />} />
        <Route path="/ForgotPassword/:token" element={<ForgotPassword />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
