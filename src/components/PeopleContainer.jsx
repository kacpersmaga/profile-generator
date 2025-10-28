import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import AppContext from "../data/AppContext";


function PeopleContainer({ element: ElementComponent }) {
  

  const context = useContext(AppContext);
  const items = context.items;

  return (
    <Row className="g-4">
      {items.map(person => (
        <Col key={person.id} xs={12} md={6} lg={4}>
          <ElementComponent person={person} />
        </Col>
      ))}
    </Row>
  );
}

export default PeopleContainer;