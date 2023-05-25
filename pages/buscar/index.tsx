import React from 'react'
import styles from './searchRecipe.module.scss'
import { Layout } from '../../sections'
import { Separator, TitleComponent } from '../../components'

const SearchRecipe = ({query}: any) => {
  return (
    <Layout>
      <TitleComponent title={`Busqueda: ${query}`} align={'center'} />
      <Separator alignment={'center'}/>
    </Layout>
  );
}

export async function getServerSideProps({ query }: any) {

  return { props: {query: query.query} }
}

export default SearchRecipe;