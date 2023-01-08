import React from "react";


const Post = (props) => {
    return (
        <div>
            {/* <td>{index+1}</td> */}
            <h1>{props.entry.name}</h1>
            <h1>{props.entry.body}</h1>
            <h1>{props.entry.date}</h1>
            <button>Like</button>
            <button>Dislike</button>
        </div>

      );
}
 
export default Post;