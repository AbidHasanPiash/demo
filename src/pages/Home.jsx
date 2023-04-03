import { useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {

  const [activeTab, setAtciveTab] = useState('No Page selected');
  const handleActiveTab = (tab) => {
    setAtciveTab(tab);
  }
  //passing data from Header to Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <div>
        <Sidebar tab = {handleActiveTab} isSidebarOpen = {isSidebarOpen}/>
      </div>
      <div className="w-full">
        <div className="flex flex-col w-full">
          <Header setIsSidebarOpen = {setIsSidebarOpen}/>
          <div>
            <h1 className="hidden">{activeTab}</h1>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
