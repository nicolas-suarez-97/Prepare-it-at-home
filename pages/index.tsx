import type { NextPage } from 'next'
import { Layout } from '../sections'
import { Hero } from '../sections/home'
import { CategoryCarousel, FeaturedRecipes, NewsLetterSubscribe, RecipeBlog, TrendyRecipes } from '../sections/cross'
import styles from './index.module.scss';

const Home: NextPage = () => {
  const recipes = [
    {
      name: 'Chicken Fajita',
      ingredients: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    },
    {
      name: 'Chicken Fajita',
      ingredients: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      imageAlt: '',
      path: 'chicken-fajitas',
      time: '30 min',
      difficulty: 1,
      calories: '500 kcl',
    }
  ]

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

  const blogs = [
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: '1. Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: '2. Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: '3. Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: '4. Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: '4. Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
  ];

  return (
    <Layout layoutStyle={styles.home}>
      <Hero />
      <TrendyRecipes recipes={recipes}/>
      <CategoryCarousel categories={categories}/>
      <RecipeBlog blogs={blogs}/>
      {/*<NewsLetterSubscribe />*/}
      <FeaturedRecipes recipes={recipes}/>
    </Layout>
  )
}

export default Home
