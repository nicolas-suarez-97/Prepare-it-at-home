import React from 'react'
import styles from './recipePreview.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { RecipePreviewType } from '../../types'

const RecipePreview = (recipe: RecipePreviewType) => {
  const { recipeUrl, imageUrl, imageAlt, name, ingredients } = recipe
  return (
    <Link href={ recipeUrl } className={styles['recipe']}>
      <div className={styles['recipe__container']}>
        <Image
          src={ imageUrl }
          height={ 250 }
          width={ 300 }
          alt={ imageAlt }
          className={styles['recipe__image']}
        />
        <h5 className={styles['recipe__title']}>{ name }</h5>
        <p className={styles['recipe__ingredients']}>
          <span>Ingredientes:</span> { ingredients }
        </p>
      </div>
    </Link>
  )
}

export default RecipePreview