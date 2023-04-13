import React from 'react';
import Link from 'next/link';
import { Drawer } from '@mantine/core';
import styled from 'styled-components';

interface MenuProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ open, setOpen }: MenuProps) => {
  const onLinkClick = () => setOpen(false);
    return (
        <StyledDrawer
            closeButtonProps={{ 'aria-label': 'Close modal' }}
            opened={open}
            onClose={() => setOpen(false)}
            position='right'
        >
            <StyledLink onClick={onLinkClick} href="/">Home</StyledLink>
            <StyledLink onClick={onLinkClick} href="/contact">Contact</StyledLink>
        </StyledDrawer>
    );
};

const StyledDrawer = styled(Drawer)`
  .mantine-Drawer-content, .mantine-Drawer-header {
    background-color: #000;
  }

  .mantine-Drawer-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
`;

export default Menu;
