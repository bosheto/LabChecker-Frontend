// import './App.css'
import Header from "./Header"
import HostCard from "./HostCard";
import HostHandler from "./HostHandler";


function App() {
  return (
    <div className="App">
      {/* <HostCard name="FPR 3210" ip="10.238.105.132" version="7.6.1"/> */}
      <Header />
      <HostHandler />
    </div>
    // <Header />
  );
}

export default App
