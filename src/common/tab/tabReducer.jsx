const INITIAL_STATE = { tabSelected: '' }

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, tabSelected: action.payload }
        default:
            return state
    }
}