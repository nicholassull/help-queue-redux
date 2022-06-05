import ticketListReducer from '../../reducers/ticket-list-reducer'

describe('ticketListReducer', () => {

  let action;
  const ticketData = {
    names: 'Ryan and Amber',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    })
  });

  test('Should successfully update ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    const newNames = 'Mario and Luigi'
    const newAction = {
      type: 'ADD_TICKET',
      names: newNames,
      location: location,
      issue: issue,
      id: id
    };

    const oldState = ticketListReducer({}, action)

    expect(ticketListReducer(oldState, newAction)).toEqual({
      [id] : {
        names: newNames,
        location: location,
        issue: issue,
        id: id
      }
    })
  });
});