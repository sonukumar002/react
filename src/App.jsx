// import canvas from "./canvas";
import React from "react";
import "./index.css";
function App() {
  return (
   
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <canvas 
        id="myCanvas"
        width={window.innerWidth}

        height={window.innerHeight}
        className="w-full h-full border border-gray-500"/>
        
      </div>
    
  );

}
export default App;