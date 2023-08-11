import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Passwd from "./pages/Passwd";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import GroupHome from "./pages/GroupHome";
import Album from "./pages/Album";
import ScreenProgress from "./pages/ScreenProgress";
import Screenshare from "./pages/Screenshare";
import GroupDetail from "./pages/GroupDetail";
import Signup1_old from "./pages/Signup1_old";
import Signup2_old from "./pages/Signup2_old";
import Signup3_old from "./pages/Signup3_old";
import Signup1_new from "./pages/Signup1_new";
import Signup2_new from "./pages/Signup2_new";
import Signup3_new from "./pages/Signup3_new";
import Signup4_new from "./pages/Signup4_new";
import Signup5_new from "./pages/Signup5_new";
import Date_List from "./pages/Date_List";
import Date_Detail from "./pages/Date_Detail";
import Date_Plus from "./pages/Date_Plus";
import Date_Write from "./pages/Date_Write";
import AlbumDetail from "./pages/AlbumDetail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/Login" element={<Login />} />{" "}
          <Route path="/Passwd" element={<Passwd />} />{" "}
          <Route path="/Home" element={<Home />} />{" "}
          <Route path="/GroupDetail" element={<GroupDetail />} />{" "}
          <Route path="/GroupHome" element={<GroupHome />} />{" "}
          <Route path="/Album" element={<Album />} />{" "}
          <Route path="/Screenshare" element={<Screenshare />} />{" "}
          <Route path="/ScreenProgress" element={<ScreenProgress />} />{" "}
          <Route path="/Passwd" element={<Passwd />} />{" "}
          <Route path="/Signup1_old" element={<Signup1_old />} />{" "}
          <Route path="/Signup2_old" element={<Signup2_old />} />{" "}
          <Route path="/Signup3_old" element={<Signup3_old />} />{" "}
          <Route path="/Signup1_new" element={<Signup1_new />} />{" "}
          <Route path="/Signup2_new" element={<Signup2_new />} />{" "}
          <Route path="/Signup3_new" element={<Signup3_new />} />{" "}
          <Route path="/Signup4_new" element={<Signup4_new />} />{" "}
          <Route path="/Signup5_new" element={<Signup5_new />} />{" "}
          <Route path="/Date_List" element={<Date_List />} />{" "}
          <Route path="/Date_Detail" element={<Date_Detail />} />{" "}
          <Route path="/Date_Plus" element={<Date_Plus />} />{" "}
          <Route path="/Date_Write" element={<Date_Write />} />{" "}
          <Route path="/AlbumDetail" element={<AlbumDetail />} />{" "}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
