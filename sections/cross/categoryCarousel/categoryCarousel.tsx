import React from 'react'
import styles from './categoryCarousel.module.scss'
import { CategoryPreview } from '../../../components'
import { CategoryPreviewType } from '../../../types'

const CategoryCarousel = ({ categories }: any) => {
  return (
    <section className={ styles['categories'] }>
      <h2 className={ styles['categories__title'] }>Categorías</h2>
      <div className={styles['categories__container']}>
        <div className={ styles['categories__items'] }>
          { categories.map((c: CategoryPreviewType, index: number) => (
            <CategoryPreview key={ index } { ...c } />
          )) }
        </div>
      </div>
    </section>
  )
}

export default CategoryCarousel
