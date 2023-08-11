import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Passwd from "./pages/Passwd";
//import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Membership2 from "./pages/Membership2";
import Membership3 from "./pages/Membership3";
import Membership4 from "./pages/Membership4";
import Post1 from "./pages/Post1";
import Post2 from "./pages/Post2";
import Post3 from "./pages/Post3";
import Schedule1 from "./pages/Schedule1";
import Schedule2 from "./pages/Schedule2";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route path="/" element={<Splash />} /> */}
          <Route path="/" element={<Login />} />{" "}
          <Route path="/Passwd" element={<Passwd />} />{" "}
          <Route path="/Home" element={<Home />} />{" "}
          <Route path="/Passwd" element={<Passwd />} />{" "}
          <Route path="/Membership" element={<Membership />} />{" "}
          <Route path="/Membership2" element={<Membership2 />} />{" "}
          <Route path="/Membership3" element={<Membership3 />} />{" "}
          <Route path="/Membership4" element={<Membership4 />} />{" "}
          <Route path="/Post1" element={<Post1 />} />{" "}
          <Route path="/Post2" element={<Post2 />} />{" "}
          <Route path="/Post3" element={<Post3 />} />{" "}
          <Route path="/Schedule1" element={<Schedule1 />} />{" "}
          <Route path="/Schedule2" element={<Schedule2 />} />{" "}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
