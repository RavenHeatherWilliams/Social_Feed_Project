import React, { useState } from 'react';



const CreatePost = (props) => {
    return ( 
        <form>
            <label>Name</label>
            <input type= "text" value={name} onChange={(event) => setName(event.target.value)} />

            <label>Body</label>
            <input type= "textarea" value={body} onChange={(event) => setBody(event.target.value)} />


        </form>
     );

} 
export default CreatePost;