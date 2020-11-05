import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

import Link from 'next/link';

type BsNavLinkType = {
  title: string,
  href: string
}

const BsNavLink = ({title, href}: BsNavLinkType) => {
  return (
    <Link href={href}>
      <a className='nav-link port-navbar-link'>
        {title}
      </a>
    </Link>
  )
}

const BsNavBrand = () => {
  return (
    <Link href={'/'}>
      <a className="navbar-brand port-navbar-brand">Artur Oleksyn</a>
    </Link>
  )
}

const LoginLink = () => {
  return (
    <span className="nav-link port-navbar-link">
      Login
    </span>
  )
}

const LogoutLink = () => {
  return (
    <span className="nav-link port-navbar-link">
      Logout
    </span>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={'port-navbar port-default absolute'}
        color="transparent"
        dark
        expand="md">
        <BsNavBrand/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className={"port-navbar-item"}>
              <BsNavLink
                href={'/'}
                title={'Home'}
              />
            </NavItem>
            <NavItem className={"port-navbar-item"}>
              <BsNavLink
                href={'/about'}
                title={'About'}
              />
            </NavItem>
            <NavItem className={"port-navbar-item"}>
              <BsNavLink
                href={'/portfolios'}
                title={'Portfolios'}
              />
            </NavItem>
            <NavItem className={"port-navbar-item"}>
              <BsNavLink
                href={'/blogs'}
                title={'Blogs'}
              />
            </NavItem>
            <NavItem className={"port-navbar-item"}>
              <BsNavLink
                href={'/cv'}
                title={'Cv'}
              />
            </NavItem>
          </Nav>
        </Collapse>
        <Nav navbar>
          <NavItem className={"port-navbar-item clickable"}>
            <LoginLink/>
          </NavItem>
          <NavItem className={"port-navbar-item clickable"}>
            <LogoutLink/>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
