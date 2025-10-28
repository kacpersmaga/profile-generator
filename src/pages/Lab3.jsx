import { people } from "../module-data.js";
import PeopleContainer from "../components/PeopleContainer";
import ProfileItem from "../components/ProfileItem";

function Lab3() {
  return (
    <>
      <h1 className="mb-4">Laboratorium 3: Zarządzanie stanem</h1>
      <PeopleContainer element={ProfileItem} />
    </>
  );
}

export default Lab3;