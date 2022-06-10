import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUE = {proventos: [{}], pagamentos: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/financialControls`)
    return {
        type: 'FINANCIAL_CONTROLS_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/financialControls/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro',error))
            })
    }
}

export function showUpdate(payment) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('paymentForm', payment)
    ]
}

export function showRemove(payment) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('paymentForm', payment)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('paymentForm',INITIAL_VALUE)
    ]
}