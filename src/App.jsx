import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Host from "./components/Host";
import AddHost from "./components/AddHost";
import About from "./components/About";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element= { <About/> } />
      <Route path="/host" element= { <Host />}></Route>
      <Route path="/new-host" element= { <AddHost />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App
