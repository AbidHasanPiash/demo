import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import PharmacyItems from "./pages/pharmacyContent/PharmacyItems";
import ChartOfAccountView from "./pages/chartOfAccountView/ChartOfAccountView";
import ChartOfAccount from "./pages/chartOfAccount/ChartOfAccount";
import Report from "./pages/Report";
import NonPharmacy from "./pages/nonPharmacy/NonPharmacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact  path="/login" element={<Login />} />
          <Route exact  path="/signup" element={<Signup />} />
          <Route exact  path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<div className="flex items-center justify-center">404 error</div>} />
          <Route path="/" element={<Home/>}>
            <Route index element={<Dashboard/>} />
            <Route exact  path="/report" element={<Report/>} />
            <Route exact  path="/chartofaccount" element={<ChartOfAccount/>} />
            <Route exact  path="/chartofaccountview" element={<ChartOfAccountView/>} />
            <Route exact  path="/pharmacy" element={<PharmacyItems/>} />
            <Route exact  path="/non-pharmacy" element={<NonPharmacy/>} />
            <Route exact  path="/order" element={<div>order</div>} />
            <Route exact  path="/purchase" element={<div>purchase</div>} />
            <Route exact  path="/category" element={<div>category</div>} />
            <Route exact  path="/box" element={<div>box</div>} />
            <Route exact  path="/company" element={<div>company</div>} />
            <Route exact  path="/suplier" element={<div>suplier</div>} />
            <Route exact  path="/employe" element={<div>employe</div>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
