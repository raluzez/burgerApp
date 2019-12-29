import React from 'react'
import Styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul className={Styles.NavigationItems}>
    <NavigationItem link='/' exact>Burger Builder</NavigationItem>
    {props.isAuthenticated
      ? <NavigationItem link='/orders'>Orders</NavigationItem>
      : null}
    {!props.isAuthenticated
      ? <NavigationItem link='/auth'>Authenticate</NavigationItem>
      : <NavigationItem link='/logout'>Logout</NavigationItem>}
  </ul>
)

export default navigationItems