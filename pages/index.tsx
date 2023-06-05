import type { NextPage } from 'next'
import { Layout } from '../sections'
import { Hero } from '../sections/home'
import { CategoryCarousel, FeaturedRecipes, NewsLetterSubscribe, RecipeBlog, TrendyRecipes } from '../sections/cross'
import styles from './index.module.scss';
import { getAllRecipes } from '../services/recipes/recipesServices'
import { getAllBlogs } from '../services/blog/blogService'

const Home: NextPage = ({ recipes, blogs }: any) => {
  const categories = [
    {
      label: 'Appetizers',
      categoryUrl: '/',
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    },
    {
      label: 'Bread',
      categoryUrl: '/',
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    },
    {
      label: 'Breakfast',
      categoryUrl: '/',
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    },
    {
      label: 'Cheese Pizza',
      categoryUrl: '/',
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    },
    {
      label: 'Dessert',
      categoryUrl: '/',
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    },
    {
      label: 'Soups',
      categoryUrl: '/',
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    },
    {
      label: 'Appetizers',
      categoryUrl: '/',
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    },
  ]

  return (
    <Layout layoutStyle={styles.home}>
      <Hero />
      <TrendyRecipes recipes={recipes}/>
      {/*<CategoryCarousel categories={categories}/>*/}
      <RecipeBlog blogs={blogs}/>
      {/*<NewsLetterSubscribe />*/}
      <FeaturedRecipes recipes={recipes}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const recipes = await getAllRecipes()
  const blogs = await getAllBlogs()

  return { props: { recipes, blogs } }
}

export default Home
