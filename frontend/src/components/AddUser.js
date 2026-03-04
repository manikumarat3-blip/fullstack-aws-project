import React, { useState } from "react";
import API from "../api";

function AddUser({ refresh }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/users", { name, email });
    setName("");
    setEmail("");
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
