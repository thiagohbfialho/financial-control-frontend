import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./paymentActions";
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class PaymentForm extends Component {

    calculateSummary(){
        const sum = (t, v) => t + v
        return {
            sumOfProventos: this.props.proventos.map(c => +c.valor || 0).reduce(sum),
            sumOfPagamentos: this.props.pagamentos.map(d => +d.valor || 0).reduce(sum)
        }
    }

    render(){
        const { handleSubmit, readOnly, proventos, pagamentos } = this.props
        const { sumOfProventos, sumOfPagamentos } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="nome" component={labelAndInput} readOnly={readOnly} 
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name="email" component={labelAndInput} readOnly={readOnly}
                        label='Email' cols='12 4' placeholder='Informe o email' />
                    <Summary provento={sumOfProventos} pagamento={sumOfPagamentos} />
                    <ItemList cols='12 6' list={proventos} readOnly={readOnly}
                        field='proventos' legend='Proventos' />
                    <ItemList cols='12 6' list={pagamentos} readOnly={readOnly}
                        field='pagamentos' legend='Pagamentos' />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default" 
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )       
    }
}

PaymentForm = reduxForm({form: 'paymentForm', destroyOnUnmount: false}) (PaymentForm)
const selector = formValueSelector('paymentForm')

const mapStateToProps = state => ({
    proventos: selector(state, 'proventos'), 
    pagamentos: selector(state, 'pagamentos')})
const mapDispatchToProps = dispatch => bindActionCreators({init},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)