import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import Link from 'next/link';

import {IUser} from 'interfaces/user';

type HeaderPropsType = {
  user: IUser,
  loading: boolean,
  className: string
}
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
    <a className='nav-link port-navbar-link' href={'/api/v1/login'}>Login</a>
  )
}

const LogoutLink = () => {
  return (
    <a className='nav-link port-navbar-link' href={'/api/v1/logout'}>Logout</a>
  )
}

const Header = ({user, loading, className}: HeaderPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
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
            {/*<NavItem className={"port-navbar-item"}>*/}
            {/*  <BsNavLink*/}
            {/*    href={'/secret'}*/}
            {/*    title={'Secret'}*/}
            {/*  />*/}
            {/*</NavItem>*/}
            {/*<NavItem className={"port-navbar-item"}>*/}
            {/*  <BsNavLink*/}
            {/*    href={'/secretssr'}*/}
            {/*    title={'Secret SSR'}*/}
            {/*  />*/}
            {/*</NavItem>*/}
            {/*<NavItem className={"port-navbar-item"}>*/}
            {/*  <BsNavLink*/}
            {/*    href={'/onlyadmin'}*/}
            {/*    title={'Admin'}*/}
            {/*  />*/}
            {/*</NavItem>*/}
            {/*<NavItem className={"port-navbar-item"}>*/}
            {/*  <BsNavLink*/}
            {/*      href={'/onlyadminssr'}*/}
            {/*      title={'AdminSSR'}*/}
            {/*  />*/}
            {/*</NavItem>*/}
          </Nav>
        </Collapse>
        <Nav navbar>
          {!loading && (
            <>
              {user ? (
                <NavItem className={"port-navbar-item clickable"}>
                  <LogoutLink/>
                </NavItem>
              ) : (
                <NavItem className={"port-navbar-item clickable"}>
                  <LoginLink/>
                </NavItem>
              )}
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
