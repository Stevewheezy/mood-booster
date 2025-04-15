"use client";

import React, { useState } from "react";
import {
  Nav,
  Logo,
  Hamburger,
  Menu,
  MenuLink,
  MobileMenu,
} from "../styles/Navbar.styled";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setOpen(!open);

  return (
    <Nav>
      <Logo href="/">🌿 Mood Booster</Logo>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu>
        <MenuLink href="/" active={pathname === "/"}>Home</MenuLink>
        <MenuLink href="/challenge" active={pathname === "/challenge"}>Challenge</MenuLink>
      </Menu>

      <MobileMenu open={open}>
        <MenuLink href="/" onClick={() => setOpen(false)} active={pathname === "/"}>Home</MenuLink>
        <MenuLink href="/challenge" onClick={() => setOpen(false)} active={pathname === "/challenge"}>Challenge</MenuLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
