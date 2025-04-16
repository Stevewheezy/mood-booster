'use client';
import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  background: #ffffffcc;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007c91;
  text-decoration: none;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: #007c91;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuLink = styled(Link)<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#007c91" : "#444")};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #005f6b;
  }
`;

export const MobileMenu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 64px;
  right: 0;
  width: 100%;
  background: #f0fcff;
  padding: 1rem;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 769px) {
    display: none;
  }
`;
