import { useEffect, useReducer } from "react";
import { Table, Spinner, Accordion, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetch from "../data/useFetch";
import TableDataReducer from "../data/TableDataReducer";

function TableSortHeader({ label, sortKey, dispatch }) {
  
  const handleSort = (direction) => {
    if (direction === 'reset') {
      dispatch({ type: "RESET_SORT" });
    } else {
      dispatch({ type: "SORT", payload: { key: sortKey, direction: direction } });
    }
  };

  return (
    <th>
      <Dropdown as={ButtonGroup} size="sm">
        <Dropdown.Toggle variant="light" id={`dropdown-${sortKey}`}>
          {label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSort('asc')}>Sortuj Rosnąco (A-Z)</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('desc')}>Sortuj Malejąco (Z-A)</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => handleSort('reset')}>Kolejność naturalna</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </th>
  );
}


function Lab05() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  const [state, dispatch] = useReducer(TableDataReducer, {
    originalData: [],
    sortedData: [],
  });

  useEffect(() => {
    if (posts && users && comments) {
      const tableData = posts.map((p) => {
        return {
          user: users.find((u) => u.id === p.userId),
          post: p,
          comments: comments.filter((c) => c.postId === p.id),
        };
      });
      dispatch({ type: "SET_DATA", payload: tableData });
    }
  }, [posts, users, comments]);

  if (state.sortedData.length === 0) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <>
      <h1>Laboratorium 5: Efekty i dane</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <TableSortHeader label="User" sortKey="user.name" dispatch={dispatch} />
            <TableSortHeader label="Post Title" sortKey="post.title" dispatch={dispatch} />
            <TableSortHeader label="Comments Count" sortKey="comments.length" dispatch={dispatch} />
          </tr>
        </thead>
        <tbody>
          {state.sortedData.map(({ user, post, comments }) => (
            <tr key={post.id}>
              <td>
                {user ? (
                  <Link to={`/lab5/users/${user.id}`}>{user.name}</Link>
                ) : (
                  "Brak"
                )}
              </td>
              
              <td>
                <Accordion>
                  <Accordion.Item eventKey={post.id}>
                    <Accordion.Header>{post.title}</Accordion.Header>
                    <Accordion.Body>{post.body}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>

              <td className="text-center align-middle">
                <Link to={`/lab5/posts/${post.id}/comments`}>
                  {comments.length}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Lab05;