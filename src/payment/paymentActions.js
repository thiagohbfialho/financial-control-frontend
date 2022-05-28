import axios from 'axios'
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
    return {
        type: 'TEMP'
    }
}