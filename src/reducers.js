// const initialState = {
//     count: 0
// }

export default function(state = { count: 0 }, action) {
  switch (action.type) {
    case "Increment":
      return state.concat(action.data);

    case "Decrement":
      return state.concat(action.data);

    default:
      return state;
  }
}
