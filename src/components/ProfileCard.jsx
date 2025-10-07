import ProfileParagraph from "./ProfileParagraph";

function ProfileCard(profile) {
  return (
    <div className="card p-3 shadow-sm">
      <h2 className="h5 text-primary mb-3" style={{ marginTop: 0 }}>
        Profil użytkownika
      </h2>

      <ProfileParagraph label="Imię" title={profile.name} />
      <ProfileParagraph label="Email" title={profile.email} />
      <ProfileParagraph label="Telefon" title={profile.phone} />
      <ProfileParagraph label="Data urodzin" title={profile.birthDate} />
    </div>
  );
}

export default ProfileCard;
