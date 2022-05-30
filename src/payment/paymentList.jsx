import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate } from "./paymentActions";

class PaymentList extends Component {

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(p => (
            <tr key={p._id}>
                <td>{p.nome}</td>
                <td>{p.email}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(p)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                </td>
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
                            <th>Ações</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (PaymentList)