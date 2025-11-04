import { useParams } from "react-router-dom";
import { Card, Spinner, Alert, ListGroup } from "react-bootstrap";
import useFetch from "../data/useFetch";

function PostComments() {
  const { id } = useParams();
  
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  if (!post || !comments) {
    return <Spinner animation="border" />;
  }
  
  if (!post.id) {
     return <Alert variant="danger">Nie znaleziono posta.</Alert>;
  }

  return (
    <>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title className="mb-0">{post.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          {post.body}
        </Card.Body>
      </Card>

      <h3>Komentarze ({comments.length})</h3>
      <ListGroup>
        {comments.map(comment => (
          <ListGroup.Item key={comment.id} as="li" className="d-flex flex-column">
            <div className="fw-bold">{comment.name}</div>
            <small className="text-muted mb-2">{comment.email}</small>
            <div>{comment.body}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default PostComments;