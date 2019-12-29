import React from 'react'
import Styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggler from '../SideDraw/DrawerToggler/DrawerToggler'

const toolbar = (props) => (
  <header className={Styles.Toolbar}>
    <DrawerToggler clicked={props.drawerTogglerClicked} />
    <Logo height='80%' />
    <nav className={Styles.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
)

export default toolbar
