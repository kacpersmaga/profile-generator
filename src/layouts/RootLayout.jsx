import { Outlet } from "react-router-dom";
import NavBarMenuApp from "../components/NavBarMenuApp";
import FooterApp from "../components/FooterApp";

export default function RootLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarMenuApp />
      <main className="container py-4 flex-grow-1">
        <Outlet />   {}
      </main>
      <FooterApp />
    </div>
  );
}
