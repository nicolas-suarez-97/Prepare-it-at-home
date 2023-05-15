import React from 'react'
import { Layout } from '../../sections'
import styles from './recipes.module.scss'
import { RecipePreview } from '../../components'

const Recipes = () => {
  const recipes = [
    {
      name: 'Chicken Fajita',
      ingredients: [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    }
  ]
  return (
    <Layout>
      <section className={ styles['recipes'] }>
        <h1 className={ styles['recipes__title'] }>Recetas de Cocina</h1>
        <div className={ styles['recipes__content'] }>
          { recipes.map((recipe, index) => (
            <RecipePreview recipe={ recipe } hasAdditionalInfo isCard key={ index }/>
          )) }
        </div>
      </section>
    </Layout>
  )
}

export default Recipes