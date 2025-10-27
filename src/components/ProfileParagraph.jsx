function ProfileParagraph({ label, title }) {
  return (
    <div className="mb-3">
      <strong className="text-secondary">{label}:</strong>
      <p className="mb-0 text-dark">{title}</p>
    </div>
  );
}

export default ProfileParagraph;
