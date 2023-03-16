import { useState} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {

  const [activeTab, setAtciveTab] = useState('Dashboard');
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
          <div className="bg-gray-100 flex flex-col items-center justify-center">
            <h1>{activeTab}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
