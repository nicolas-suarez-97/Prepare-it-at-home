import React from 'react'
import styles from './separator.module.scss'

interface Props {
  alignment?: string
}

const Separator = ({alignment}: Props) => {
  return (
    <div className={ `${styles['separator']} ${alignment ? styles[alignment] : ''}` }/>
  );
}

export default Separator;
