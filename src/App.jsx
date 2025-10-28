import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useReducer, useMemo } from "react";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Lab01 from "./pages/lab01";
import Lab02 from "./pages/Lab02";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import FormAddProfile from "./pages/FormAddProfile";
import FormEditProfile from "./pages/FormEditProfile";
import NotFound from "./pages/NotFound";

import { people } from "./module-data.js";
import AppContext from "./data/AppContext";
import AppReducer from "./data/AppReducer";

export default function App() {
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
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="lab01" element={<Lab01 />} />
          <Route path="lab02" element={<Lab02 />} />
          <Route path="lab02/:id" element={<Lab02 />} />
          <Route path="lab3" element={<Lab3 />} />
          <Route path="lab4" element={<Lab4 />} />
          <Route path="lab4/add" element={<FormAddProfile />} />
          <Route path="lab4/edit/:id" element={<FormEditProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}