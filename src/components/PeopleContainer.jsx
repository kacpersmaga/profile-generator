import { Row, Col } from "react-bootstrap";
import useData from "../data/useData";

function PeopleContainer({ element: ElementComponent }) {
  
  const items = useData();

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