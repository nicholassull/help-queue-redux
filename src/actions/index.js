import * as c from './../actions/ActionTypes.js'


export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: c.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id
  }
}

export const selectTicket = (id) => ({
  type: c.SELECT_TICKET,
  id
})