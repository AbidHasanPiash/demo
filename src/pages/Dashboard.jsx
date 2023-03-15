import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

//Authentication
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase";

export default function Dashboard() {

  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
        navigate("/login");
      }
    });
  }, [navigate]);

  const Logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [activeTab, setAtciveTab] = useState(null);
  const handleActiveTab = (tab) => {
    setAtciveTab(tab);
  }

  return (
    <div className="flex w-screen">
      <div className="">
        <Sidebar tab = {handleActiveTab}/>
      </div>
      <div className="w-screen">
        <div className="flex flex-col">
          <Header />
          <div>
            <h1>Home page</h1>
            <h1> {authUser ? <p>Welcome {authUser.email}</p> : <p>Please Login</p>} </h1>
            <h1>{activeTab}</h1>
            <button
              onClick={Logout}
              className="rounded-md py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
