import React from 'react'
import styles from './trendyRecipes.module.scss'
import { Button, RecipePreview } from '../../../components'
import { ButtonLayout } from '../../../types/ButtonType'
import { RecipePreviewType } from '../../../types'
import { Routes } from '../../../utils/routes'

const TrendyRecipes = ({recipes}: any) => {

  return(
    <section className={styles['container']}>
      <div className={styles['container__top']}>
        <h2 className={styles['container__title']}>Recetas en <span className={styles['red']}>Tendencia</span></h2>
        <Button
          label={'Ver Más'}
          url={Routes.RECIPES}
          layout={ButtonLayout.PRIMARY}
          newPage={false}
          className={styles['container__button']}
        />
      </div>
      <div className={styles['container__recipes']}>
        {recipes.map((r: RecipePreviewType, index: number) => index < 3 && (
          <RecipePreview
            key={index}
            recipe={r}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendyRecipes;