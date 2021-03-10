let counter = 0

/**
 * Action that takes in a post object, destructures, and gives information to reducer.
 * Assumption: post object has all of this information that is generated from the form.
 * @param {*} post
 * @returns object with type: 'ADD_POST'
 */
const addPost = ({ text, title }) => {
  counter += 1
  return {
    type: 'ADD_POST',
    text,
    title,
    id: counter,
  }
}

/**
 * Action that takes in description info, destructures, and gives information to reducer.
 * @param {*} introduction
 * @returns object with type: 'EDIT_INTRODUCTION'
 */
const editIntroduction = ({ name, image, description }) => ({
  type: 'EDIT_INTRODUCTION',
  name,
  image,
  description,
})
