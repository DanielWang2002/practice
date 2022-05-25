import React, {useState} from 'react'

import MenuItem from '../component/MenuItem'
import Menu from "../component/Menu"
import {OpenContext} from "../context/ControlContext"

let menuItemWording=[
    "測試文字1",
    "測試文字2",
    "測試文字3",
    "測試文字4"
]

const MenuPage = () =>{

    const [isOpen, setIsOpen] = useState(true)

    let menuItemArr = menuItemWording.map((wording) => <MenuItem text={wording}/>)

    return (
        <OpenContext.Provider value={{
            openContext: isOpen,
            setOpenContext: setIsOpen
        }}>
            <Menu title={"測試標題"}>
                {menuItemArr}
            </Menu>
        </OpenContext.Provider>
    )
}

export default MenuPage