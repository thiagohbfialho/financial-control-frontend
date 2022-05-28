import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTab, showTabs } from "../common/tab/tabActions";
import { create } from "./paymentActions";

import TabContent from "../common/tab/tabContent";
import TabHeader from "../common/tab/tabHeader";
import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/tabsContent";
import TabsHeader from "../common/tab/tabsHeader";

import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import List from "./paymentList";
import Form from "./paymentForm";

class Payment extends Component {

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList','tabCreate')
    }

    render(){
        return (
            <div>
                <ContentHeader title='Payment' small='registration'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='List' icon='bars' target='tabList'/>
                            <TabHeader label='Create' icon='plus' target='tabCreate'/>
                            <TabHeader label='Update' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Delete' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id='tabUpdate'><h1>Update</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, showTabs, create
}, dispatch)
export default connect(null, mapDispatchToProps)(Payment)