import React, { useState } from 'react';


function App() {
  const[entries, setEntries] = useState([{name:[], body: []}])
  return (
    <div>
      <table>
        <thead>
          <tr></tr>
          <th>Name</th>
          <tr></tr>
          <tr>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
