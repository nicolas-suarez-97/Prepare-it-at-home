import React from 'react'
import { Layout } from '../../../sections'
import { RecipePreviewType } from '../../../types'
import Image from 'next/image'
import styles from './recipeDetail.module.scss'
import { RecipeAdditionalInfo, Separator, TitleComponent } from '../../../components'

const RecipeDetail = () => {
  const recipe: RecipePreviewType = {
    author: 'Francisco',
    calories: '500 kcl',
    categories: [ 'mexicano' ],
    cookware: [ 'cuchara', 'horno', 'arrocera' ],
    creationDate: new Date(),
    dateTime: 'Almuerzo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    difficulty: 1,
    imageAlt: '',
    imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    ingredients: [ '4 trozos de bacalao desalado', '1 cebolla', '2 dientes de ajos', '1 kilo de tomates maduros o tomate triturado o tamizado', 'aceite', 'pimienta', 'sal' ],
    modificationsDate: new Date(),
    name: 'Chicken Fajita',
    path: 'chicken-fajitas',
    quantity: 3,
    steps: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
        imageAlt: '',
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
        imageAlt: '',
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
        imageAlt: '',
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
        imageAlt: '',
      },
    ],
    subcategories: [],
    time: '30 min'
  }
  return (
    <Layout>
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
                <p>{ recipe.creationDate?.toLocaleDateString() }</p>
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
              { recipe.ingredients.map((i) => (
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
              { recipe.cookware?.map((c) => (
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
            {recipe.steps?.map((step, index) => (
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

  return { props: {} }
}

export async function getStaticPaths() {
  return {
    paths: [ {
      params: { recipeId: 'chicken-fajitas' }
    } ], fallback: false
  }
}

export default RecipeDetail