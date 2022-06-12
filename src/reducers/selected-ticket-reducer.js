import * as c from './../actions/ActionTypes.js'

export default (state = null, action) => {
  switch (action.type) {
    case c.SELECT_TICKET:
      return action.id;
      
    default:
      return state;
  }
}