import React from 'react'
import Styles from './Input.module.css'

const input = (props) => {
  let inputElement = null

  const inputClasses = [Styles.InputElement]

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(Styles.Invalid)
  }

  switch (props.elementType) {
    case ('input'):
      inputElement =
        <input
          className={inputClasses.join(' ')}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value} />
      break
    case ('textarea'):
      inputElement =
        <textarea
          className={inputClasses.join(' ')}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value} />
      break
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          onChange={props.changed}
          value={props.value}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
        </select>)
      break
    default:
      inputElement =
        <input
          className={inputClasses.join(' ')}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value} />
  }

  let validationError = null
  if (props.invalid && props.touched) {
    validationError = <div className={Styles.ValidationError}>{props.errorMessage}</div>
  }

  return (
    <div className={Styles.Input}>
      <label className={Styles.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  )
}

export default input
