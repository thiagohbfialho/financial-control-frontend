import React, { Component } from 'react'
import { Field } from 'redux-form'
import Input from '../common/form/input'
import Grid from '../common/layout/grid'

class ProventoList extends Component {

    renderRows(){
        const list = this.props.list || [] 
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`proventos[${index}].descricao`} component={Input} 
                placeholder='Informe a descrição' readOnly={this.props.readOnly}/></td>
                <td><Field name={`proventos[${index}].valor`} component={Input} 
                placeholder='Informe o valor' readOnly={this.props.readOnly}/></td>
                <td></td>
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
                            <th>Ações</th>
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

export default ProventoList