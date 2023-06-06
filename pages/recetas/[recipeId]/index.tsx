import React from 'react'
import { Layout } from '../../../sections'
import { RecipePreviewType } from '../../../types'
import Image from 'next/image'
import styles from './recipeDetail.module.scss'
import { RecipeAdditionalInfo, Separator, TitleComponent } from '../../../components'
import { getAllRecipes, getRecipe } from '../../../services/recipes/recipesServices'
import { Constants } from '../../../utils/constants'

const RecipeDetail = ({ recipe }: any) => {
  return (
    <Layout
      title={recipe.name}
      description={recipe.description}
      ogImage={recipe.imageUrl}
    >
      <section className={ styles['recipe'] }>
        <div className={ styles['recipe__header'] }>
          <div className={ styles['recipe__image'] }>
            <Image src={ recipe.imageUrl } alt={ recipe.imageAlt } fill/>
          </div>
          <div className={ styles['recipe__content'] }>
            <TitleComponent title={recipe.name} />
            <Separator />
            <p className={ styles['recipe__description'] }>{ recipe.description }</p>
            <div className={ styles['recipe__info'] }>
              <div>
                <h4>Autor:</h4>
                <p>{ recipe.author }</p>
              </div>
              <div>
                <h4>Fecha Creación</h4>
                <p>{ new Date(recipe.creationDate).toLocaleDateString() }</p>
              </div>
              <div>
                <h4>Porciones</h4>
                <p>{ recipe.quantity }</p>
              </div>
            </div>
          </div>
        </div>
        <div className={ styles['recipe__additional-info'] }>
          <RecipeAdditionalInfo time={ recipe.time } difficulty={ recipe.difficulty } calories={ recipe.calories }/>
        </div>
        <div className={ styles['recipe__preparation'] }>
          <div className={ styles['recipe__ingredients'] }>
            <h2 className={ styles['recipe__ingredients-title'] }>Ingredientes</h2>
            <Separator />
            <div className={ styles['recipe__ingredients-items'] }>
              { recipe.ingredients.map((i: string) => (
                <div key={ i }>
                  <input type="checkbox" name={ i } id={ i }/>
                  <label htmlFor={ i }>{ i }</label>
                </div>
              )) }
            </div>
          </div>
          <div className={ styles['recipe__ingredients'] }>
            <h2 className={ styles['recipe__ingredients-title'] }>Utensilios</h2>
            <Separator />
            <div className={ styles['recipe__ingredients-items'] }>
              { recipe.cookware?.map((c: string) => (
                <div key={ c }>
                  <input type="checkbox" name={ c } id={ c }/>
                  <label htmlFor={ c }>{ c }</label>
                </div>
              )) }
            </div>
          </div>
        </div>
        <div className={styles['recipe__steps']}>
          <h2>Paso a paso</h2>
          <Separator />
          <div className={ styles['recipe__steps-content'] }>
            {recipe.steps?.map((step: any, index: number) => (
              <div key={index} className={ styles['recipe__steps-item'] }>
                <p dangerouslySetInnerHTML={{__html: `<span>${index + 1}. </span>${step.description}`}} />
                <div className={ styles['recipe__steps-item-image'] }>
                  <Image src={step.imageUrl} alt={step.imageAlt} fill/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {
  const recipe = await getRecipe({id: params.recipeId})

  return { props: { recipe }, revalidate: Constants.TIME_REGENERATION_DAY }
}

export async function getStaticPaths() {
  const recipes = await getAllRecipes();

  const paths = recipes.map((recipe: any) => ({
    params: { recipeId: recipe.id }
  }))

  return { paths, fallback: false }
}


export default RecipeDetail