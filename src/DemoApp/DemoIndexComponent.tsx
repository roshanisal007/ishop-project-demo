import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutComponent from "./AboutComponent";
import HomeComponent from "./HomeComponent";

export default function DemoIndexComponent()
{
    return(
        <div className="container-fluid">
           <h2>Demo Index</h2>
           <BrowserRouter>
              <Link to="home">Home</Link>
              <span>|</span>
              <Link to="about">About</Link>
              <Routes>
                  <Route path="/" element={<HomeComponent />} ></Route>
                  <Route path="/home" element={<HomeComponent />}></Route>
                  <Route path="/about" element={<AboutComponent />} ></Route>
              </Routes>
           </BrowserRouter>
        </div>
    )
}