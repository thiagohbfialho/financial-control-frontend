import React, {Component} from "react";
import { connect, Connect } from "react-redux";

import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
    render(){
        const { provento, pagamento, desconto } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='6 0 0 3' color='aqua' icon='money'
                            valor={`R$ ${provento}`} text='Total de Proventos'/>
                        <ValueBox cols='6 0 0 3' color='red' icon='credit-card'
                            valor={`R$ ${pagamento}`} text='Total de Pagamentos'/>
                        <ValueBox cols='6 0 0 3' color='red' icon='credit-card'
                            valor={`R$ ${desconto}`} text='Total Descontos'/>
                        <ValueBox cols='6 0 0 3' color='blue' icon='credit-card'
                            valor={`R$ ${provento - (desconto+pagamento)}`} 
                            text='Total Líquido'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
export default connect(mapStateToProps)(Dashboard)