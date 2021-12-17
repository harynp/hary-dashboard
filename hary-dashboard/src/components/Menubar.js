import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

const MenuBar = (props) => {
  const [menuList] = useState([
    {
      name: 'home',
      value: 'home',
      id: 1
    },
    {
      name: 'messages',
      value: 'messages',
      id: 2
    }
  ]);
  const [languageList] = useState([
    {
      name: 'English',
      value: 'english'
    },
    {
      name: 'Russian',
      value: 'russian'
    },
    {
      name: 'Spanish',
      value: 'spanish'
    }
  ])
  const [selectedMenu, setSelectedMenu] = useState('home');
  const handleItemClick = (e, value) => {
    setSelectedMenu(value.name);
  };

  return (
    <Menu size='tiny'>
      {
        menuList.map(menu => (
          <Menu.Item
            key={menu.id}
            name={menu.name}
            active={selectedMenu === menu.value}
            onClick={handleItemClick}
          />
        ))
      }

      <Menu.Menu position='right'>
        <Dropdown item text='Language'>
          <Dropdown.Menu>
            {languageList.map(lang => (
              <Dropdown.Item key={lang.name}>{lang.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu> 
  )
} 

export default MenuBar;