import { useReducer, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import AppReducer from "../data/AppReducer";

function PeopleContainer({ data, element: ElementComponent }) {

  const initialState = useMemo(() => {
    return data.map(person => ({
      ...person,
      rating: 0,
      check: false
    }));
  }, [data]);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <Row className="g-4">
      {state.map(person => (
        <Col key={person.id} xs={12} md={6} lg={4}>
          <ElementComponent person={person} dispatch={dispatch} />
        </Col>
      ))}
    </Row>
  );
}

export default PeopleContainer;