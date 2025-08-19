import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import NavBar from "./components/NavBar";
import Host from "./components/Host";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/admin" element= { <Admin /> } />
      <Route path="/host" element= { <Host />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App
