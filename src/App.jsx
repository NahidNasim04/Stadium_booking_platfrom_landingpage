import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    
  );
}

export default App;


/*function App() {
  return <h1>Hello StadiumBook</h1>;
}

export default App;
*/