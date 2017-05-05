import {fromJS} from 'immutable'
import moment from 'moment'

export const initialState = fromJS({
  // Times are stored as ms from epoch (moment().valueOf())
  expenses: [] // [{amount, time}], sorted by time
})

export function getExpenses (state) {
  return [
    {amount: 200000, time: moment([2017, 5, 5, 13, 50])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 0])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 1])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 2])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 3])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 4])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 5])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 6])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 7])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 8])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 9])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 10])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 11])},
    {amount: 4000, time: moment([2017, 5, 5, 13, 51, 12])},
    {amount: 70000, time: moment([2017, 5, 5, 13, 52])},
    {amount: 9000, time: moment([2017, 5, 5, 13, 53])}
  ]
}

export function reducer (state = initialState, {type, payload}) {
  return state
}
