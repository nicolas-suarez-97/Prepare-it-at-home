import React from 'react'
import styles from './searchRecipe.module.scss'
import { Layout } from '../../sections'
import { Separator, TitleComponent, UnderConstruction } from '../../components'
import NotFound from '../404'
import Image from 'next/image'

const SearchRecipe = ({ query }: any) => {
  return (
    <Layout
      title='Buscar'
      description='Encuentra los mejores cursos, artículos y recetas de cocina.'
    >
      <TitleComponent title={ `Busqueda: ${ query }` } align={ 'center' }/>
      <Separator alignment={ 'center' }/>
      <UnderConstruction />
    </Layout>
  )
}

export async function getServerSideProps({ query }: any) {

  return { props: { query: query.query } }
}

export default SearchRecipe