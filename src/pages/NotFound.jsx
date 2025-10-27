import React from 'react';
import { Alert, Container } from 'react-bootstrap';

function NotFound() {
  return (
    <Container>
      <Alert variant="danger">
        <Alert.Heading>Błąd 404</Alert.Heading>
        <p>Brak strony o podanym adresie.</p>
      </Alert>
    </Container>
  );
}

export default NotFound;