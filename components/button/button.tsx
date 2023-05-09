import React from 'react'
import { ButtonType } from '../../types/ButtonType'
import styles from './button.module.scss'

const Button = (data: ButtonType) => {
  const { url, layout, newPage, onClick, label, prefixIcon, sufixIcon, className } = data
  const buttonLayout = `button--${ layout }`
  const redirect = newPage ? '_blank' : ''

  return (
    <>
      { onClick !== undefined
        ? <a
          onClick={ onClick }
          className={ `${ styles[buttonLayout] } ${className}` }
        >
          <i className={'material-icons'}>{ prefixIcon }</i>
          { label }
          <i className={'material-icons'}>{ sufixIcon }</i>
        </a>
        : <a
          href={ url }
          className={ `${ styles[buttonLayout] } ${className}` }
          target={ redirect }
          rel={ 'noreferrer' }
        >
          <i className={'material-icons'}>{ prefixIcon }</i>
          { label }
          <i className={'material-icons'}>{ sufixIcon }</i>
        </a>
      }
    </>
  )
}

export default Button