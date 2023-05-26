import React from 'react'
import styles from './pillComponent.module.scss'
import Link from 'next/link'

interface Props {
  label: string
  url?: string
  fill?: boolean
  fillType?: string
}

const PillComponent = ({label, url, fill, fillType}: Props) => {
  let fillStyle = ''

  if (fill && fillType === 'primary') fillStyle = styles['pill__fill-primary']
  if (fill && fillType === 'secondary') fillStyle = styles['pill__fill-secondary']

  return (
    url !== undefined ? (
      <Link href={url} className={`${styles['pill']} ${fillStyle}`}>
        {label}
      </Link>
    ) : (
      <div className={`${styles['pill']} ${fillStyle}`}>
        {label}
      </div>
    )
  );
}

export default PillComponent;