import React from "react";
import "./App.css";
import { Formats, Sidebar } from "./components";

function App() {
  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="flex items-center	justify-center gap-10 xl:gap-8 w-11/12 lg:w-10/12 xl:w-11/12 h-[17rem] xl:h-48 xl:mx-18">
        <Sidebar />
        <Formats />
      </div>
    </div>
  );
}
  
export default App;
