function RatingBar({ rate = 0 }) {
  const maxStars = 10;
  
  return (
    <div aria-label={`Ocena: ${rate} na ${maxStars}`} style={{ fontSize: '1.2rem', color: '#f0ad4e' }}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <span key={index} style={{ marginRight: '2px' }}>
          {index < rate ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

export default RatingBar;