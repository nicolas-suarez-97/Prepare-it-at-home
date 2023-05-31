import React from 'react'
import styles from './searchRecipe.module.scss'
import { Layout } from '../../sections'
import { Separator, TitleComponent } from '../../components'
import NotFound from '../404'
import Image from 'next/image'

const SearchRecipe = ({ query }: any) => {
  return (
    <Layout>
      <TitleComponent title={ `Busqueda: ${ query }` } align={ 'center' }/>
      <Separator alignment={ 'center' }/>
      <div className={ styles['not-found'] }>
        <div className={ styles['not-found__image'] }>
          <Image src={ '/img/undraw_barbecue.svg' } alt={ 'Not found' } fill/>
        </div>
        <p>Ups... No hay resultados para <b>{query}</b></p>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query }: any) {

  return { props: { query: query.query } }
}

export default SearchRecipe