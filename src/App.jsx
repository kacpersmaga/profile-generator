import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Lab01 from "./pages/Lab01";
import Lab02 from "./pages/Lab02";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import FormAddProfile from "./pages/FormAddProfile";
import FormEditProfile from "./pages/FormEditProfile";
import NotFound from "./pages/NotFound";

import Lab05 from "./pages/Lab05";
import UserDetails from "./pages/UserDetails";
import PostComments from "./pages/PostComments";

export default function App() {
  return (
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

        <Route path="lab5" element={<Lab05 />} />
        <Route path="lab5/users/:id" element={<UserDetails />} />
        <Route path="lab5/posts/:id/comments" element={<PostComments />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}