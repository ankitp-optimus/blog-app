import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Write from "./pages/write/Write";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Links
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
    <Topbar/>
       <Routes>
          <Route path="/" element={<Homepage/>} />
           
          <Route path="/register" element={user ? <Homepage/> : <Register/>} />

          <Route path="/login" element={user ? <Homepage/> : <Login/>} />
        
          <Route path="/settings" element={user ? <Setting/> : <Register/>} />
           
          <Route path="/write" element={user ? <Write/> : <Register/>} />
           
          <Route path="/post/:postId" element={<Single/>} />
             
        </Routes>

    </Router>
  );
}

export default App;
