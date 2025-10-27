import React from "react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

function ProfileGrid({ people, columns }) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div className="mt-4" style={gridStyle}>
      {people.map((person) => (
        <Link
          key={person.id}
          to={`/lab02/${person.id}`}
          style={linkStyle}
        >
          <ProfileCard
            name={person.name}
            email={person.email}
            birthDate={person.birthDate}
            phone={person.phone}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProfileGrid;