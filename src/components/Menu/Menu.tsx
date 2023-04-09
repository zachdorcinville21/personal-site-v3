import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import Link from 'next/link';

interface MenuProps {
  open: boolean;
}

const Menu = ({ open }: MenuProps) => {
  return (
    <StyledMenu open={open}>
      <Link href="/">
        Home
      </Link>
      <Link href="/experience">
        Experience
        </Link>
      <Link href="/contact">
        Contact
        </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
}


export default Menu;
