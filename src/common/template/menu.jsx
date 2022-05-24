import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
        <MenuTree label='Vencimentos' icon='navicon'>
            <MenuItem path='#financialControls' label='Cadastro' icon='edit'/>
        </MenuTree>
    </ul>
)