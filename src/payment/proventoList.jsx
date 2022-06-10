import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert } from 'redux-form'
import Input from '../common/form/input'
import Grid from '../common/layout/grid'

class ProventoList extends Component {

    add(index, item = {}){
        if(!this.props.readOnly){
            this.props.arrayInsert('paymentForm', 'proventos', index, item)
        }
    }

    renderRows(){
        const list = this.props.list || [] 
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`proventos[${index}].descricao`} component={Input} 
                placeholder='Informe a descrição' readOnly={this.props.readOnly}/></td>
                <td><Field name={`proventos[${index}].valor`} component={Input} 
                placeholder='Informe o valor' readOnly={this.props.readOnly}/></td>
                <td>
                    <button type='button' className="btn btn-success"
                        onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button' className="btn btn-warning"
                        onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Proventos</legend>
                </fieldset>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert}, dispatch)
export default connect(null, mapDispatchToProps) (ProventoList)