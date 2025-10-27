import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { people } from "../module-data";
import ProfileCard from "../components/ProfileCard";

export default function Lab02() {
  const { id } = useParams();

  if (!id) {
    return <Alert variant="warning">brak identyfikatora osoby.</Alert>;
  }

  const isInt = /^\d+$/.test(id);
  if (!isInt) {
    return <Alert variant="danger">nieprawidłowy identyfikator.</Alert>;
  }
  const numId = Number(id);

  const person = people.find(p => p.id === numId);
  if (!person) {
    return <Alert variant="secondary">nie znaleziono osoby o tym identyfikatorze.</Alert>;
  }
const mapped = {
  fullName: person.name,
  email: person.email,
  phone: person.phone,
  birthdate: person.birthDate,
};
  return (
  <>
    <h1>Lab02</h1>
    <ProfileCard
      name={person.name}
      email={person.email}
      phone={person.phone}
      birthDate={person.birthDate}
    />
  </>
);

}
