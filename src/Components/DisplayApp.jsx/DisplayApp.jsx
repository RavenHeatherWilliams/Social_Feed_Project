import React from "react";
import Post from "../Post.jsx/Post";
// import DisplayPosts from "../DisplayPosts.jsx/DisplayPosts";



const DisplayApp = (props) => {
    return (

        <div>
            {props.parentEntries.map((entry, index) => {
                return (
                    <Post entry={entry} />
                )
                })}
           
         </div> 

    );
}
 
export default DisplayApp;