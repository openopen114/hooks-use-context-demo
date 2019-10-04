import React, { useContext } from "react";
import AppContext from "../Context/AppContext";

export default function NameInput() {
  const { name, setName } = useContext(AppContext);
  return (
    <div>
      <h2>Name Input Component</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}
