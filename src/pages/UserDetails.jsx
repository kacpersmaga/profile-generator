import { useParams } from "react-router-dom";
import { Card, Spinner, Alert, ListGroup } from "react-bootstrap";
import useFetch from "../data/useFetch";

function UserDetails() {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!user) {
    return <Spinner animation="border" />;
  }

  if (user.length === 0) {
    return <Alert variant="danger">Nie znaleziono użytkownika.</Alert>;
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title className="mb-0">Profil: {user.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Username:</strong> {user.username}</ListGroup.Item>
          <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
          <ListGroup.Item><strong>Phone:</strong> {user.phone}</ListGroup.Item>
          <ListGroup.Item><strong>Website:</strong> {user.website}</ListGroup.Item>
          <ListGroup.Item>
            <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default UserDetails;