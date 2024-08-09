import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/Nav";
import Aside from "./Components/Sidebar/aside";
import TopNews from './Components/TopNews/TopNews'

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-0">
          <div className="col-md-12 p-0">
            <NavBar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mt-3 p-0">
            <Aside />
          </div>
          <div className="col-md-10 mt-4">
            <Home />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/topNews" element={<TopNews/>}/>
      </Routes>
    </>
  );
}

export default App;
