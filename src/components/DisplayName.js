import React, { useContext } from "react";
import AppContext from "../Context/AppContext";

export default function DisplayName() {
  const { name } = useContext(AppContext);
  return <h1>Display Hello {name}</h1>;
}
