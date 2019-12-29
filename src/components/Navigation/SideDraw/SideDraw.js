import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Styles from './SideDraw.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'

const sideDraw = (props) => {
  let attachedStyles = [Styles.SideDrawer, Styles.Close]
  if (props.open) {
    attachedStyles = [Styles.SideDrawer, Styles.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedStyles.join(' ')} onClick={props.closed}>
        <Logo height='11%' />
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDraw
