import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
        <NavbarBrand>
          <Link href={'/'}>
            <a className="port-navbar-brand">Artur Oleksyn</a>
          </Link>
        </NavbarBrand>
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
      </Navbar>
    </div>
  );
}

export default Header;
