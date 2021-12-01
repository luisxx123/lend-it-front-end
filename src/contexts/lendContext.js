import React, { createContext, useState, useContext } from "react";
import * as Api from "../api/delete.js";
const lendContext = createContext({});

export default function LendContextProvider({ children }) {
  const [lends, setLends] = useState([]);
  const [late, setLate] = useState([]);

  async function removeLend(id, pathname) {
    try {
      setLends(lends.filter((e) => e.id !== id));
      setLate(late.filter((e) => e.id !== id));
      
      if(pathname === "/emprestado"){
        await Api.destroyBorrow({id});
      } else {
        await Api.destroyLent({id});
      }
      
      alert("Removido com sucesso!");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <lendContext.Provider
      value={{
        lends,
        setLends,
        late,
        setLate,
        removeLend,
      }}
    >
      {children}
    </lendContext.Provider>
  );
}

export const useLend = () => useContext(lendContext);
