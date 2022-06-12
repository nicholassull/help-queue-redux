import selectedTicketReducer from "../../reducers/selected-ticket-reducer";
import ticketListReducer from "../../reducers/ticket-list-reducer";
import * as c from './../../actions/ActionTypes';

describe("selectedTicketReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(ticketListReducer(null, {type: null})).toEqual(null);
  });
})