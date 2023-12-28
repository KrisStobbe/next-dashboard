'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons'
import {
  faCode,
  faGauge,
} from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren, useContext } from 'react'
import { Badge, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { SidebarContext } from '@/app/ui/dashboard/sidebar-provider'

type SidebarNavItemProps = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren

const SidebarNavItem = (props: SidebarNavItemProps) => {
  const {
    icon,
    children,
    href,
  } = props

  const {
    showSidebarState: [, setIsShowSidebar],
  } = useContext(SidebarContext)

  return (
    <Nav.Item>
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className="px-3 py-2 d-flex align-items-center" onClick={() => setIsShowSidebar(false)}>
          {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
            : <span className="nav-icon ms-n3" />}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  )
}

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

export default function SidebarNav() {
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGauge} href="/">
        Dashboard
        <small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small>
      </SidebarNavItem>
      <SidebarNavItem icon={faCode} href="/pokemons">
        Sample
        <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
      </SidebarNavItem>
    </ul>
  )
}
