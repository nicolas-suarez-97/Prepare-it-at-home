import React from 'react'
import { Layout } from '../../../sections'

const RecipeDetail = () => {
  return (
    <Layout>

    </Layout>
  );
}

export async function getStaticProps({params}: any) {

  return { props: { } }
}

export async function getStaticPaths() {
  return { paths: [{
      params: {recipeId: 'chicken-fajitas'}
    }], fallback: false }
}


export default RecipeDetail;