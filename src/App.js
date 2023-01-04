import React, { useState } from "react";
import DisplayApp from "./Components/DisplayApp.jsx/DisplayApp" 
import Post from "./Components/Post.jsx/Post";
import DisplayPosts from "./Components/DisplayPosts.jsx/DisplayPosts";


// under const add date option
function App() {
  const[entries, setEntries] = useState([{name:"Heather", body: "Hi World!", date:"12-31-2022"},{name:"Heather", body: "Hi World!", date:"12-31-2022"} ])

  return (
    <div>
      <DisplayApp parentEntries={entries} />
      <Post />
      <DisplayPosts />

    </div>
  );
}

export default DisplayApp;
