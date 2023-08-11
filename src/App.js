import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Passwd from "./pages/Passwd";
//import Splash from "./pages/Splash";
import Home from "./pages/Home";
import GroupHome from "./pages/GroupHome";
import Album from "./pages/Album";
import ScreenProgress from "./pages/ScreenProgress";
import Screenshare from "./pages/Screenshare";
import GroupDetail from "./pages/GroupDetail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route path="/" element={<Splash />} /> */}
          <Route path="/Login" element={<Login />} />{" "}
          <Route path="/Passwd" element={<Passwd />} />{" "}
          <Route path="/Home" element={<Home />} />{" "}
          <Route path="/GroupDetail" element={<GroupDetail />} />{" "}
          <Route path="/GroupHome" element={<GroupHome />} />{" "}
          <Route path="/Album" element={<Album />} />{" "}
          <Route path="/Screenshare" element={<Screenshare />} />{" "}
          <Route path="/ScreenProgress" element={<ScreenProgress />} />{" "}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
