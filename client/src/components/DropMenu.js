import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Example = (props) => {


  return (
    <DropdownButton id="dropdown-item-button" title="example@gmail.com">
        <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
        <Dropdown.Item href="/Settings">Settings</Dropdown.Item>
        <Dropdown.Item href="/Home">Logout</Dropdown.Item>
    </DropdownButton>
            
  );
}

export default Example;