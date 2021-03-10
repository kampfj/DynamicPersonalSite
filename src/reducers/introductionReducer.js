/**
 * Reducer to modify introduction state.
 * @param {*} state current state for introduction
 * @param {*} action type, payload
 */
const introduction = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_INTRODUCTION': {
      const { name, image, description } = action
      return { name, image, description }
    }
    default:
      return state
  }
}

export default introduction
