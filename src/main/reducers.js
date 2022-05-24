import { combineReducers } from "redux";

const rootReducer = combineReducers({
    dashboard: () => ({summary: {provento:100, pagamento:10, desconto: 10}})
})

export default rootReducer