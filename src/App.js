import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Route,BrowserRouter as Router ,Routes  } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      {/* <Home/> */}
      {/* <Login/> */}
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
