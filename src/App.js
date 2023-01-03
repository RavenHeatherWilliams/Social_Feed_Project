import React, { useState } from 'react';

// under const add date option
function App() {
  const[entries, setEntries] = useState([{name:"Heather", body: "Hi World!", date:"12-31-2022"}])
  return (
    <div>
      <table>
        <thead>
          {/* <th>Entry Number</th> */}
          <th>Name</th>
          <th>Body</th>
          <th>Date</th>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
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

    </div>
  );
}

export default App;
