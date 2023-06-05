import React from 'react'
import styles from './recipePreview.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { RecipePreviewType } from '../../types'
import { RecipeAdditionalInfo } from '../index'
import { Routes } from '../../utils/routes'

interface Props {
  recipe: RecipePreviewType,
  hasAdditionalInfo?: boolean,
  isCard?: boolean
}

const RecipePreview = ({recipe, hasAdditionalInfo = false, isCard = false}: Props) => {
  const { id, imageUrl, imageAlt, name, ingredients, time, difficulty, calories} = recipe
  return (
    <Link href={ `${Routes.RECIPES}/${id}` } className={ styles['recipe'] }>
      <div className={ `${styles['recipe__container']} ${isCard && styles['card']}` }>
        <div className={ styles['recipe__image'] }>
          <Image
            src={ imageUrl }
            alt={ imageAlt }
            fill
          />
        </div>

        <h5 className={ styles['recipe__title'] }>{ name }</h5>
        <p className={ styles['recipe__ingredients'] }>
          <span>Ingredientes:</span> { ingredients.join(', ') }
        </p>
        { hasAdditionalInfo && (
          <RecipeAdditionalInfo
            time={time}
            difficulty={difficulty}
            calories={calories}
          />
        ) }
      </div>
    </Link>
  )
}

export default RecipePreview