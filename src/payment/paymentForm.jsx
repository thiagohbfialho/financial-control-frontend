import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class PaymentForm extends Component {

    render(){
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="nome" component="input"/>
                    <Field name="email" component="input"/>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        )       
    }
}

export default reduxForm({form: 'paymentForm'}) (PaymentForm)