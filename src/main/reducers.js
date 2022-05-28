import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import TabReducer from "../common/tab/tabReducer";
import DashboardReducer from "../dashboard/dashboardReducer";
import PaymentReducer from "../payment/paymentReducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    payment: PaymentReducer,
    form: formReducer
})

export default rootReducer