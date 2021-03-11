let counter = 0

/**
 * Action that takes in a post object, destructures, and gives information to reducer.
 * Assumption: post object has all of this information that is generated from the form.
 * @param {*} post
 * @returns object with type: 'ADD_POST'
 */
export const addPost = (text, title, image) => {
  return {
    type: 'ADD_POST',
    text,
    title,
    image,
  }
}

export const editPost = (text, title, image, id) => {
  return {
    type: 'EDIT_POST',
    text,
    title,
    image,
    id,
  }
}

export const deletePost = id => ({
  type: 'DELETE_POST',
  id,
})

/**
 * Action that takes in description info, destructures, and gives information to reducer.
 * @param {*} introduction
 * @returns object with type: 'EDIT_INTRODUCTION'
 */
export const editIntroduction = (name, image, description, socialMedia) => ({
  type: 'EDIT_INTRODUCTION',
  name,
  image,
  description,
  socialMedia,
})
