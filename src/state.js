import moment from 'moment'

export const initialState = {
  // Times are stored as ms from epoch (moment().valueOf())
  expenses: [] // [{amount, time}], sorted by time
}

export function getExpenses (state) {
  return state.expenses
    .map(({amount, time}) => ({
      amount,
      time: moment(time)
    }))
}

export function getTotal (state) {
  return state.expenses.map(x => x.amount).reduce((a, b) => a + b, 0)
}

export function reducer (state = initialState, {type, payload}) {
  switch (type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.concat([payload])
      }
    case 'CLEAR_DATA':
      return {
        ...state,
        expenses: []
      }
    default:
      return state
  }
}
