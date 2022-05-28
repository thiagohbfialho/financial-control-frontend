import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getlist } from "./paymentActions";

class PaymentList extends Component {

    componentWillMount(){
        this.props.getlist()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(p => (
            <tr key={p._id}>
                <td>{p.nome}</td>
                <td>{p.email}</td>
            </tr>
        )) 
    }

    render(){
        console.log(this.props.list)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.payment.list})
const mapDispatchToProps = dispatch => bindActionCreators({getlist}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (PaymentList)