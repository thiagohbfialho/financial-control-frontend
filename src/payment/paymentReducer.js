const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FINANCIAL_CONTROLS_FETCHED':
            return { ...state, list: action.payload.data}
        default:
            return state
    }
}