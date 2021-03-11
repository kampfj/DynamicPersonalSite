/**
 * Reducer to modify posts state.
 * @param {*} state current state for posts
 * @param {*} action type, payload
 */
const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST': {
      const {
        text,
        title,
        image,
        id,
      } = action
      return [
        ...state, {
          text,
          title,
          image,
          id,
        },
      ]
    }
    default:
      return state
  }
}

export default posts
