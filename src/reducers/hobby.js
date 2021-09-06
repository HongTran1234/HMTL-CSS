const initialState = {
    list: [1, 2, 3],
    activeId: null
}
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list]
            newList.push(action.payload)
            return {
                // state cux
                ...state,
                // list moi
                list: newList
            }


        }
        default:
            return state
    }
}
export default hobbyReducer