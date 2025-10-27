import { Card, Button, ButtonGroup, Stack, Badge } from "react-bootstrap";
import RatingBar from "./RatingBar";

export default function ProfileItem({ person, dispatch }) {
  const { id, name, email, phone, birthDate, rating, check } = person;

  const handleRate = () => {
    dispatch({ type: "rate", id: id });
  };
  
  const handleDelete = () => {
    if (window.confirm(`Czy na pewno chcesz usunąć ${name}?`)) {
      dispatch({ type: "delete", id: id });
    }
  };
  
  const handleCheck = () => {
    dispatch({ type: "check", id: id });
  };

  return (
    <Card className="shadow h-100">
      <Card.Body className="d-flex flex-column">
        <Stack direction="horizontal" gap={2} className="mb-2">
          <Card.Title className="mb-0 h5">{name}</Card.Title>
          {check && <Badge bg="success">Zaznaczony</Badge>}
          <div className="ms-auto text-muted small">ID: {id}</div>
        </Stack>

        <div className="mb-2"><small><strong>Email:</strong> {email}</small></div>
        <div className="mb-2"><small><strong>Telefon:</strong> {phone}</small></div>
        <div className="mb-3"><small><strong>Data ur.:</strong> {birthDate}</small></div>

        <div className="mb-3">
          <RatingBar rate={rating} />
        </div>

        <ButtonGroup size="sm" className="mt-auto">
          <Button variant={check ? "success" : "outline-success"} onClick={handleCheck}>
            Check
          </Button>
          <Button variant="outline-primary" onClick={handleRate}>Rate</Button>
          <Button variant="outline-secondary" disabled>Edit</Button>
          <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}