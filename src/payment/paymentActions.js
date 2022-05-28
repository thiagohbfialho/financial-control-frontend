import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const BASE_URL = 'http://localhost:3003/api'

export function getlist() {
    const request = axios.get(`${BASE_URL}/financialControls`)
    return {
        type: 'FINANCIAL_CONTROLS_FETCHED',
        payload: request
    }
}

export function create(values){
    axios.post(`${BASE_URL}/financialControls`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro',error))
        })
    return {
        type: 'TEMP'
    }
}