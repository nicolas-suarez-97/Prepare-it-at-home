import type { NextPage } from 'next'
import { Layout } from '../sections'
import { Hero } from '../sections/home'
import { CategoryCarousel, FeaturedRecipes, NewsLetterSubscribe, RecipeBlog, TrendyRecipes } from '../sections/cross'
import styles from './index.module.scss';

const Home: NextPage = () => {
  return (
    <Layout layoutStyle={styles.home}>
      <Hero />
      <TrendyRecipes />
      <CategoryCarousel />
      <RecipeBlog />
      <NewsLetterSubscribe />
      <FeaturedRecipes />
    </Layout>
  )
}

export default Home
