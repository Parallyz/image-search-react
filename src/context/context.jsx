import { createContext, useState } from "react";
import App from "../components/App";


export const ApplicationContext = createContext(null);

export function AppContext() {
  let [search, Setsearch] = useState("");
 

  return (
    <ApplicationContext.Provider value={{ search, Setsearch }}>
      <App />
    </ApplicationContext.Provider>
  );
}
