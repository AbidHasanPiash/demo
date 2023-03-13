import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home/>} />
          <Route exact  path="/login" element={<Login />} />
          <Route exact  path="/signup" element={<Signup />} />
          <Route path="*" element={<div className="flex items-center justify-center">404 error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
