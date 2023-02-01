import type { NextPage } from 'next'
import { Layout } from '../sections'
import { Hero } from '../sections/home'
import { CategoryCarousel, TrendyRecipes } from '../sections/cross'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <TrendyRecipes />
      <CategoryCarousel />
    </Layout>
  )
}

export default Home
