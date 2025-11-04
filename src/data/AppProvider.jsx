import { useReducer, useMemo } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { people } from "../module-data.js";

function AppProvider({ children }) {
  const initialState = useMemo(() => {
    return people.map(person => ({
      ...person,
      rating: 0,
      check: false,
      bio: "", 
      photo: ""
    }));
  }, []);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ items: state, dispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
