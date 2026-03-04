import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Fullstack AWS Project</h1>
      <AddUser refresh={() => window.location.reload()} />
      <UserList />
    </div>
  );
}

export default App;
