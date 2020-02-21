import React, { Fragment, useState, useEffect } from 'react';
import { Menu, Dropdown, Icon } from 'antd';




const MenuConfig = (props) => {
    
    
    function ajustclick(menuOpen){
    

        console.log( 'Entrei aqui',menuOpen)
        let vr = menuOpen=>{
        }
        if (
            menuOpen.open){
            
            return false
        }
        return true
     
        console.log(vr,'vr')
        setMenuOpen(vr)
    }
    
    const [menuOpen, setMenuOpen] = useState(props.open)
    
    
    
    const menus = (



        < Menu >
            <Menu.Item key="0">
                <div style={{
                    display: "inline",
                    height: "30px",
                    width: "100px",
                    marginLeft: "1745px",
                    marginTop: "12px",

                    backgroundColor: "red"
                }}> aeeeeeeeee</div>
            </Menu.Item>
        </Menu >
    )

    useEffect(() => {
      
        console.log('sss',menuOpen)
        setMenuOpen(props.open );
      
    }, [menuOpen])


    return (

        <Fragment>


            <Dropdown visible={menuOpen.open} overlay={menus} trigger={['click']}>
                <div className="ant-dropdown-link" onClick={()=>ajustclick()}>
                    teste<Icon type="down" />
                </div>
            </Dropdown>
        </Fragment>

    )

}



export default MenuConfig