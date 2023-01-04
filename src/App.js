import React, { useState } from 'react';
import DisplayApp from './Components/DisplayApp.jsx/DisplayApp'


// under const add date option
function App() {
  const[entries, setEntries] = useState([{name:"Heather", body: "Hi World!", date:"12-31-2022"}])

  return (
    <div>
      <DisplayApp parentEntries={entries} />

    </div>
  );
}

export default DisplayApp;
