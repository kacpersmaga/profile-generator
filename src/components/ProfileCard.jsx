import ProfileParagraph from "./ProfileParagraph";

function ProfileCard({ name, email, phone, birthDate }) {
  return (
    <div 
      className="card p-3 shadow-sm h-100 rounded-4 bg-white"
      style={{ transition: "transform 0.2s", cursor: "pointer" }}
    >
      <h2 className="h5 text-primary mb-3" style={{ marginTop: 0 }}>
        Profil użytkownika
      </h2>

      <ProfileParagraph label="Imię" title={name} />
      <ProfileParagraph label="Email" title={email} />
      <ProfileParagraph label="Telefon" title={phone} />
      <ProfileParagraph label="Data urodzin" title={birthDate} />
    </div>
  );
}

export default ProfileCard;
