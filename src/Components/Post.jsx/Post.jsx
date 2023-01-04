import React from "react";


const Post = (entry) => {
    return (
        <div>
            {/* <td>{index+1}</td> */}
            <h1>{entry.name}</h1>
            <h1>{entry.body}</h1>
            <h1>{entry.like}</h1>
            <h1>{entry.dislike}</h1>
            <h1>{entry.date}</h1>
        </div>
      );
}
 
export default Post;