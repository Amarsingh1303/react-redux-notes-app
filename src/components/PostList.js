import React from "react";
import { Card } from "react-bootstrap";
import { deleteNote } from "../redux/index";
import { connect } from "react-redux";

function PostList(props) {
  const { notestitle, notesdesc, index, notid } = props;
  return (
    <div className="mx-2 my-2">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {index + 1}. {notestitle}
          </Card.Title>
          <Card.Text>{notesdesc}</Card.Text>
          <button
            className="btn btn-primary"
            onClick={() => props.deleteNote(notid)}
          >
            Delete
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id)),
  };
};
export default connect(null, mapDispatchToProps)(PostList);
