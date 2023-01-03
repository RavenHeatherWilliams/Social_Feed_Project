import React, { useState } from 'react';


function App() {
  const[entries, setEntries] = useState([{name:"Heather", body: "Hi World!"}])
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Body</th>
        </thead>
        <tbody>
          {entries.map((entry) => {
            return (
              <tr><td>{entry.name}</td><td>{entry.body}</td></tr>
            )
            })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
