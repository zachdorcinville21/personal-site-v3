import React from 'react';
import { StyledBurger } from './Burger.styled';

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default Burger;
