export default(state = [], action) => {
  switch(action.type){
    case 'ADD ITEM':
      return [...state, action.item]
    default:
      return state
  }
}
