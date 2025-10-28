import PeopleContainer from "../components/PeopleContainer";
import ProfileItem from "../components/ProfileItem";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Lab4() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Laboratorium 4: Kontekst i Formularze</h1>
        <Button as={Link} to="/lab4/add" variant="primary">
          + Dodaj nowy profil
        </Button>
      </div>
      
      <PeopleContainer element={ProfileItem} />
    </>
  );
}

export default Lab4;