import { Button, Form, FormControl, Alert, Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import AppContext from "../data/AppContext";

function FormEditProfile() {
  const { id } = useParams();
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const personToEdit = items.find(p => p.id === Number(id));

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: personToEdit 
  });

  const onSubmit = (data) => {
    dispatch({
      type: "edit",
      payload: data
    });
    navigate("/lab4");
  };

  if (!personToEdit) {
    return <Alert variant="danger">Nie znaleziono osoby o ID: {id}</Alert>
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1>Edytuj profil: {personToEdit.name}</h1>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
            
            <input type="hidden" {...register("id")} />

            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Imię i nazwisko</Form.Label>
              <FormControl 
                id="name" 
                {...register("name", { 
                  required: "Imię jest wymagane.",
                  minLength: { value: 3, message: "Imię musi mieć co najmniej 3 znaki." }
                })} 
              />
              {errors.name && <small className="text-danger">{errors.name.message}</small>}
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <FormControl 
                id="email" 
                type="email"
                {...register("email", { required: "Email jest wymagany." })} 
              />
              {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="phone">Telefon</Form.Label>
              <FormControl id="phone" type="tel" {...register("phone")} />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="birthDate">Data urodzenia</Form.Label>
              <FormControl id="birthDate" type="date" {...register("birthDate")} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="photo">URL zdjęcia</Form.Label>
              <FormControl id="photo" type="url" {...register("photo")} />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="bio">Bio</Form.Label>
              <FormControl id="bio" as="textarea" rows={3} {...register("bio")} />
            </Form.Group>
            
            <div className="d-grid">
              <Button type="submit" variant="primary" size="lg">
                Zapisz zmiany
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormEditProfile;