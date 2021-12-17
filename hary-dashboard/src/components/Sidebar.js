import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const SidebarMenu = () => {
  const [activeItem, setActiveItem] = useState('');
  const [sideBarMenu] = useState([
    {
      title: 'Products',
      submenu: [
        {
          name: 'Enterprice',
          value: 'enterprice',
          id: '1'
        },
        {
          name: 'Customer',
          value: 'customer',
          id: '2'
        },
      ]
    },
    {
      title: 'CMS Solutions',
      submenu: [
        {
          name: 'Rails',
          value: 'rails',
          id: '3'
        },
        {
          name: 'Phyton',
          value: 'phyton',
          id: '4'
        },
      ]
    },
  ])
  
  return (
    <Menu vertical
      mode="inline"
      style={{ height: "100%", borderRight: 0 }}
    >
      <Menu.Item key="/enterprice">
        <h3>Product</h3>
          <NavLink to="/enterprice" className="nav-text">
            <p style={{fontSize: 12}}>Enterprice</p>
          </NavLink>
          <NavLink to="/customer" className="nav-text">
            <p style={{fontSize: 12}}>Customer</p>
          </NavLink>
      </Menu.Item>
      <Menu.Item >
        <h3>Product2</h3>
          <NavLink to="#" className="nav-text">
            <p style={{fontSize: 12}}>Option1</p>
          </NavLink>
          <NavLink to="#" className="nav-text">
            <p style={{fontSize: 12}}>Option2</p>
          </NavLink>
      </Menu.Item>
      <Menu.Item>
        <h3>Product3</h3>
          <NavLink to="#" className="nav-text">
            <p style={{fontSize: 12}}>Option1</p>
          </NavLink>
          <NavLink to="#" className="nav-text">
            <p style={{fontSize: 12}}>Option2</p>
          </NavLink>
      </Menu.Item>
    </Menu>
  )
}

export default SidebarMenu;

