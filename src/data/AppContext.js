import { createContext } from "react";

const AppContext = createContext({
  items: [],
  dispatch: () => {},
});

export default AppContext;