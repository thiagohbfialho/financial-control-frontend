const INITIAL_STATE = { tabSelected: '', visible: {} }

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, tabSelected: action.payload }
        case 'TAB_SHOWED':
            return { ...state, visible: action.payload }
        default:
            return state
    }
}