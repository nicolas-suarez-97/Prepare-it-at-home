import React from 'react'
import styles from './logo.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  redirect?: boolean
}

const Logo = ({ redirect = true }: Props) => {
  return (
    redirect === true ? (
      <Link href={ '/' } className={ styles['logo'] }>
        <Image
          src="/img/logo.png"
          alt="Logo Preparalo en Casa"
          fill
        />
      </Link>
    ) : (
      <div className={ styles['logo'] }>
        <Image
          src="/img/logo.png"
          alt="Logo Preparalo en Casa"
          fill
        />
      </div>
    )
  )
}

export default Logo