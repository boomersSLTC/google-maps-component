import React from "react";
import {Location} from "./lib/index";
const google_Api = 'AIzaSyCPibLEX-xq6_6FPjuFKSHHZ8GfN5bVf5w';
function App() {
  return (
    <div>
      <Location google_Api={google_Api}/>
    </div>
  );
}

export default App;
