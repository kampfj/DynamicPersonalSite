/**
 * Reducer to modify posts state.
 * @param {*} state current state for posts
 * @param {*} action type, payload
 */
const posts = (state = [], action) => {
  const counter = state.length + 1
  switch (action.type) {
    case 'ADD_POST': {
      const {
        text,
        title,
        image,
      } = action
      return [
        ...state, {
          text,
          title,
          image,
          id: counter,
        },
      ]
    }
    case 'EDIT_POST': {
      const { text, title, image, id } = action
      return state.map(post => {
        if (post.id === id) {
          return { text, title, image, id }
        }
        return post
      })
    }
    case 'DELETE_POST': {
      const { id } = action
      return state.filter(post => post.id !== id)
    }
    default:
      return state
  }
}

export default posts
