import {fromJS} from 'immutable'

export const initialState = fromJS({
  expenses: [], // [{amount, time}]
  endPeriods: [], // [time], sorted
  showAfter: -1 // index of endPeriods
  /*
     If -1, then show everything before the first element of endPeriods

     If its an element of endPeriods, then show everything with time
     between endPeriods[showAfter] and endPeriods[showAfter + 1].

     If endPeriods[showAfter] is the last element, then show everything
     after endPeriods[showAfter]
  */
})

export function reducer (state = initialState, {type, payload}) {
  return state
}
