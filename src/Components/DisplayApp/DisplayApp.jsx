
const DisplayApp  = (props) => {
    return (
        <table>
            <thead>
                <tr>
                {/* <th>Entry Number</th> */}
                <th>Name</th>
                <th>Body</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry, index) => {
                return (
                <tr>
                    {/* <td>{index+1}</td> */}
                    <td>{entry.name}</td>
                    <td>{entry.body}</td>
                    <td>{entry.date}</td>
                </tr>
                )
                })}
            </tbody>
      </table>

      );
}
 
export default DisplayApp;