const INITIAL_STATE = { summary: {provento: 0, pagamento: 0, desconto: 0 }}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'FINANCIAL_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data}    
        default:
            return state;
    }
}