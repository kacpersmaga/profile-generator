import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Lab01 from "./pages/lab01";
import Lab02 from "./pages/Lab02";
import NotFound from "./pages/NotFound";
import Lab3 from "./pages/Lab3";

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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}