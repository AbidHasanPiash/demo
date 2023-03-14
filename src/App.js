import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home/>} />
          <Route exact  path="/login" element={<Login />} />
          <Route exact  path="/signup" element={<Signup />} />
          <Route exact  path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<div className="flex items-center justify-center">404 error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
