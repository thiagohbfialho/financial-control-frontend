import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='' label='Dashboard' icon='dashboard' />
        <MenuTree label='Payments' icon='navicon'>
            <MenuItem path='payments' label='Registration' icon='edit'/> 
        </MenuTree>
    </ul>
)