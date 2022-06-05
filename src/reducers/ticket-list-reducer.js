export default (state = {}, action) => {
  const {names, location, issue, id} = action;
  switch (action.type) {
    case 'ADD_TICKET':
      //Object.assign takes 3 arguments: 1st must be an empty object {} so it can mutate that instead of the state passed in, 2nd is the object that will be cloned into the new object, 3rd is the change that will be made to the new copy (in this case the new ticket that will be added). 
      return Object.assign({}, state, {
        //The key is the ticket's id and the value is the ticket object.
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
    case 'DELETE_TICKET':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};