
const DisplayApp = (props) => {
    return (

        <div>
            {props.parentEntries.map((entry, index) => {
                return (
                <div>
                    {/* <td>{index+1}</td> */}
                    <td>{entry.name}</td>
                    <td>{entry.body}</td>
                    <td>{entry.date}</td>
                </div>
                )
                })}
           
         </div> 

    );
}
 
export default DisplayApp;