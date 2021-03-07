import React from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignInMenu({signOut}) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown pointing='top left' text='Bob'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text='CreateEvent' icon='plus'/>
          <Dropdown.Item text='To my profile' icon='user' />
          <Dropdown.Item onClick={signOut} text='Sign out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
