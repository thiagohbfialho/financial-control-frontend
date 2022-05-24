import React, {Component} from "react";
import Row from "../common/layout/row";

import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";

class Dashboard extends Component {
    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            valor='R$ 10' text='Total de Proventos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            valor='R$ 10' text='Total de Descontos'/>
                        <ValueBox cols='12 4' color='blue' icon='money'
                            valor='R$ 0' text='Total Líquido'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard