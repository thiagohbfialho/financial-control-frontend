import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./paymentActions";
import labelAndInput from "../common/form/labelAndInput";
import ProventoList from "./proventoList";

class PaymentForm extends Component {

    render(){
        const { handleSubmit, readOnly, proventos } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="nome" component={labelAndInput} readOnly={readOnly} 
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name="email" component={labelAndInput} readOnly={readOnly}
                        label='Email' cols='12 4' placeholder='Informe o email' />
                    <ProventoList cols='12 6' list={proventos} readOnly={readOnly}/>
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

const mapStateToProps = state => ({proventos: selector(state, 'proventos')})
const mapDispatchToProps = dispatch => bindActionCreators({init},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)