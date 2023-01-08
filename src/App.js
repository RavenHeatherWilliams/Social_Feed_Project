import React, { useState } from "react";
import DisplayApp from "./Components/DisplayApp.jsx/DisplayApp" 
import DisplayPosts from "./Components/DisplayPosts.jsx/DisplayPosts";


// under const add date option
function App() {
  const[posts, setPost] = useState([{name:"Heather", body: "Hi World!", date:"12-31-2022"},{name:"Heather", body: "Hi World!", date:"12-31-2022"} ])

  function addNewPost(post){
    let tempPost = [post, ...posts];
    setPost(tempPost)
  }
  return (
    <div>
      <DisplayPosts addNewPost={addNewPost}/>
      <DisplayApp parentEntries={posts} />
    </div>
  );
}

export default App;
