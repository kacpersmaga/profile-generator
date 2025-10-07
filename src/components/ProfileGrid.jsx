import React from "react";
import ProfileCard from "./ProfileCard";

function ProfileGrid({ people, columns }) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: "20px",
  };

  return (
    <div className="mt-4" style={gridStyle}>
      {people.map((person) => (
        <ProfileCard
          key={person.id}
          name={person.name}
          email={person.email}
          birthDate={person.birthDate}
          phone={person.phone}
        />
      ))}
    </div>
  );
}

export default ProfileGrid;
