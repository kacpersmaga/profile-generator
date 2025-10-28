import { Button, Form, FormControl, Alert, Container, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

function FormAddProfile() {
  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    setErrors([]);

    const data = new FormData(e.target);
    const newPerson = {
      id: Date.now(), 
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      birthDate: data.get("birthDate"),
      bio: data.get("bio"),
      photo: data.get("photo"),
      rating: 0,
      check: false,
    };

    let validationErrors = [];
    if (!newPerson.name || newPerson.name.length < 3) {
      validationErrors.push("Imię musi mieć co najmniej 3 znaki.");
    }
    if (!newPerson.email || !newPerson.email.includes("@")) {
      validationErrors.push("Wprowadź poprawny adres email.");
    }
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    dispatch({
      type: "add",
      payload: newPerson
    });

    setSending(false);
    
    navigate("/lab4");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1>Dodaj nowy profil</h1>
          
          {errors.length > 0 && (
            <Alert variant="danger">
              {errors.map((e, i) => <p key={i} className="mb-0">{e}</p>)}
            </Alert>
          )}
          
          <Form onSubmit={onSubmitFunction}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Imię i nazwisko</Form.Label>
              <FormControl required id="name" name="name" minLength={3} />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <FormControl required id="email" name="email" type="email" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="phone">Telefon</Form.Label>
              <FormControl id="phone" name="phone" type="tel" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="birthDate">Data urodzenia</Form.Label>
              <FormControl id="birthDate" name="birthDate" type="date" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="photo">URL zdjęcia</Form.Label>
              <FormControl id="photo" name="photo" type="url" placeholder="https://..." />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="bio">Bio</Form.Label>
              <FormControl id="bio" name="bio" as="textarea" rows={3} />
            </Form.Group>
            
            <div className="d-grid">
              <Button disabled={isSending} type="submit" variant="primary" size="lg">
                {isSending ? "Dodawanie..." : "Dodaj profil"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormAddProfile;