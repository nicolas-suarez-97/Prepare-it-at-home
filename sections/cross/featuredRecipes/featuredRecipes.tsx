import React from 'react';
import styles from './featuredRecipes.module.scss';
import { RecipePreviewType } from '../../../types'
import { RecipePreview } from '../../../components'

interface Props {
  recipes: RecipePreviewType[]
}

const FeaturedRecipes = ({recipes}: Props) => {
  return(
    <section className={styles['featured']}>
      <h2 className={styles['featured__title']}>Recetas Recomendadas</h2>
      <div className={styles['featured__content']}>
        {recipes.map((r: RecipePreviewType, index: number) => index <= 5 && (
          <RecipePreview
            key={index}
            recipe={r}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedRecipes;
