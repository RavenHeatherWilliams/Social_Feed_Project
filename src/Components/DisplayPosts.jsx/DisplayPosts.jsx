import React, { useState } from 'react';


const DisplayPosts = (props) => {

    console.log(props.parentPosts);

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            body: body,
            date: date
        };
        // console.log(newPost);
        props.addNewPost(newPost)
    }


    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    // const [like, setLike] = useState("");
    // const [Dislike, setDislike] = useState("");
    const [date, setDate] = useState("");

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type= "text" value={name} onChange={(event) => setName(event.target.value)} />

            <label>Body</label>
            <input type= "textarea" value={body} onChange={(event) => setBody(event.target.value)} />

            {/* <label>Like</label>
            <input type= "button" />

            <label>Dislike</label>
            <input type= "button"/> */}

            <label>Date</label>
            <input type= "date" value={date} onChange={(event) => setDate(event.target.value)}/>

            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default DisplayPosts;