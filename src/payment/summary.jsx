import React, {Component} from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox"

export default ({provento, pagamento}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    valor={`R$ ${provento}`} text='Total de Proventos' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    valor={`R$ ${pagamento}`} text='Total de Pagamentos' />
                <ValueBox cols='12 4' color='blue' icon='money'
                    valor={`R$ ${provento - pagamento}`} text='Total Consolidado' />
            </Row>            
        </fieldset>
    </Grid>
)