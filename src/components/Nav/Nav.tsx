import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import styles from './Nav.module.sass';

const Nav = () => {
  const [navColor, setColor] = useState("");
  const [open, setOpen] = useState(false);
  const [showBurgerButton, setShowBurgerButton] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const color = window.scrollY < 60 ? "" : "#000000";
      setColor(color);
    });
    if (window.screen.width <= 480) {
        setShowBurgerButton(true);
    }
  }, []);

  return (
    <NavContainer color={navColor}>
      <Logo onClick={() => scroll.scrollToTop()}>
        <p className={styles.zdtxt}>Z D</p>
      </Logo>
      {!showBurgerButton ? (
        <div className={styles.hyperlinks}>
          <Link href="/" style={{ textDecoration: "none", color: "#fffafa" }}>
            <NavItem as="p">Home</NavItem>
          </Link>
          <Link
            href="/contact"
            style={{ textDecoration: "none", color: "#fffafa" }}
          >
            <NavItem as="p">Contact</NavItem>
          </Link>
        </div>
      ) : (
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} />
        </div>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.color};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  z-index: 10;
  transition: background-color 0.4s ease-out;
`;

const NavItem = styled.div`
  color: #fffafa;
`;

const Logo = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default Nav;
