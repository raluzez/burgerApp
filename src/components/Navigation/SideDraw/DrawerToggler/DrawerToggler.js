import React from 'react'
import Styles from './DrawerToggler.module.css'

const drawerTogler = (props) => (
  <div className={Styles.DrawerToggle} onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
)

export default drawerTogler
