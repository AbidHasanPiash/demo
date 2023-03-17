import { useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {

  const [activeTab, setAtciveTab] = useState('Dashboard');
  const handleActiveTab = (tab) => {
    setAtciveTab(tab);
  }
  //passing data from Header to Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex w-screen">
      <div className="">
        <Sidebar tab = {handleActiveTab} isSidebarOpen = {isSidebarOpen}/>
      </div>
      <div className="w-screen">
        <div className="flex flex-col">
          <Header setIsSidebarOpen = {setIsSidebarOpen}/>
          <div>
            <h1 className="text-5xl">{activeTab}</h1>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
