import React from "react";
import Post from "../Post.jsx/Post";



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