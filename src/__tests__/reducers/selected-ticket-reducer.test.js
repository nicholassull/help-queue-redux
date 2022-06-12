import selectedTicketReducer from "../../reducers/selected-ticket-reducer";
import ticketListReducer from "../../reducers/ticket-list-reducer";
import * as c from './../../actions/ActionTypes';

describe("selectedTicketReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(selectedTicketReducer(null, {type: null})).toEqual(null);
  });
  
  test('Should update selectedTicket to value of id', () => {
    
    const action = {
      type: c.SELECT_TICKET,
      id: 1
    }
    
    expect(selectedTicketReducer(null, action)).toEqual(1);
  });
})