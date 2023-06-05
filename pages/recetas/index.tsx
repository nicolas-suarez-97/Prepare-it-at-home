import React from 'react'
import { Layout } from '../../sections'
import styles from './recipes.module.scss'
import { RecipePreview, Separator, TitleComponent } from '../../components'
import { getAllRecipes } from '../../services/recipes/recipesServices'

const Recipes = ({ recipes }: any) => {
  return (
    <Layout>
      <section className={ styles['recipes'] }>
        <TitleComponent title='Recetas de Cocina' align={'center'} />
        <Separator alignment={'center'}/>
        <div className={ styles['recipes__content'] }>
          { recipes.map((recipe: any, index: number) => (
            <RecipePreview recipe={ recipe } hasAdditionalInfo isCard key={ index }/>
          )) }
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const recipes = await getAllRecipes()

  return { props: { recipes } }
}

export default Recipes