import React from 'react'
import { Layout } from '../sections'
import Image from 'next/image'
import styles from './error.module.scss'

const InternalError = () => {
  return (
    <Layout>
      <section className={styles['error']}>
        <div className={styles['error__image']}>
          <Image src={ '/img/undraw_tasting.svg' } alt={ 'Not found' } fill/>
        </div>
        <h1 className={styles['error__error']}>500</h1>
        <h1 className={styles['error__title']}>Ups... <br/>Ocurrió un error</h1>
      </section>
    </Layout>
  )
}

export default InternalError