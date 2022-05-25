import React, { Component } from "react";
import TabHeader from "../common/tab/tabHeader";
import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/tabsContent";
import TabsHeader from "../common/tab/tabsHeader";

import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";

class Payment extends Component {

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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default Payment