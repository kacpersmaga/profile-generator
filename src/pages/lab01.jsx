import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { people } from "../module-data.js";
import ProfileCard from "../components/ProfileCard";

function Lab01() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
      <Row className="g-3">
        {people.map((person) => (
          <Col key={person.id} xs={12} md={6} lg={4}>
            <Link to={`/lab02/${person.id}`} style={linkStyle}>
              <ProfileCard
                name={person.name}
                email={person.email}
                birthDate={person.birthDate}
                phone={person.phone}
              />
            </Link>
          </Col>
        ))}
      </Row>
  );
}

export default Lab01;