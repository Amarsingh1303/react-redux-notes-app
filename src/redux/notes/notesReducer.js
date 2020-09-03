const { ADD_NOTE, DELETE_NOTE } = require("./notesType");

const initialState = {
  post: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        post: [...state.post, action.payload],
      };
    case DELETE_NOTE:
      const newpost = state.post.filter((ele) => ele.id !== action.payload);
      return {
        post: newpost,
      };
    default:
      return state;
  }
};

// const notesReducer = (state = initialState, action) => {
//   return state;
// };

export default notesReducer;
