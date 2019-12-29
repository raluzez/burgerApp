import React, { Component } from 'react'
import Styles from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
  render () {
    let ingredient = null

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={Styles.BreadBottom} />
        break
      case ('bread-top'):
        ingredient = (
          <div className={Styles.BreadTop}>
            <div className={Styles.Seeds1} />
            <div className={Styles.Seeds2} />
          </div>)
        break
      case ('meat'):
        ingredient = <div className={Styles.Meat} />
        break
      case ('cheese'):
        ingredient = <div className={Styles.Cheese} />
        break
      case ('bacon'):
        ingredient = <div className={Styles.Bacon} />
        break
      case ('salad'):
        ingredient = <div className={Styles.Salad} />
        break
      default :
        ingredient = null
    }
    return ingredient
  };
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient
